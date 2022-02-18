const backToTop = document.getElementById("backtotop");

// 화면 아래로 스크롤 되었는지 //
//          체크             //
//                           //

const checkScroll = () => {
  /* 
  웹 페이지가 수직으로 얼마나 스크롤되었는지를 확인하는 값 (픽셀 단위로 변환)
  https://developer.mozilla.org/ko/docs/Web/API/window/pageYOffset
  */

  let pageYOffset = window.pageYOffset;

  if (pageYOffset !== 0) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
};

//  화면 최상단으로 스크롤업   //
//                           //
//                           //

const moveBackToTop = () => {
  if (window.pageYOffset > 0) {
    /* 
  smooth 하기 scroll 하기 
  https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo
      */
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

window.addEventListener("scroll", checkScroll);
backToTop.addEventListener("click", moveBackToTop);

/* --------------------------------------------------------------------- */

/* 서로가 서로를 호출하는 함수를 선언하게 될 경우
  const transformNext = () => {}; 처럼 선언하게 될 경우 
  const 로 선언하면 호이스팅 이슈로 선언이 되지않아 에러가 발생함.
  addEventListener -> 어떤 이벤트가 발생했는지, 발생한 이벤트의 타입을
  event 인자에서 받아서 표현
*/

// 카드 화면 오른쪽으로 넘기기 //

function transformNext(event) {
  const slideNext = event.target;
  const slidePrev = slideNext.previousElementSibling;

  // 관련된 ul 태그 선택
  const classList = slideNext.parentElement.parentElement.nextElementSibling;
  let activeLi = classList.getAttribute("data-position");
  const liList = classList.getElementsByTagName("li");

  /* classList.clientWidth 는 ul tag의 실질적인 너비
   * liList.length * 260 에서 260은 각 li 요소의 실질 너비(margin 포함)
   * activeLi 는 data-position 에 있는 현재 위치
   * liList.length * 260 + Number(activeLi)는 현재 위치부터 오른쪽으로
   * 나열되야 하는 나머지 카드들의 너비
   */

  /* classList.clientWidth < (liList.length * 260 + Number(activeLi))
   * 의미는 오른쪽으로 나열될 카드들이 넘친 상태이므로, 왼쪽으로 이동이 가능함
   */

  if (classList.clientWidth < liList.length * 260 + Number(activeLi)) {
    // 위치를 왼쪽으로 260 이동 (-260px)
    activeLi = Number(activeLi) - 260;

    /* 위치를 왼쪽으로 260 이동 (-260px)
     * 해당 위치는 변경된 activeLi 값이 적용된 liList.length * 260 + Number(activeLi) 값임
     * 이 값보다 classList.clientWidth (ul 태그의 너비) 가 크다는 것은
     * 넘치는 li 가 없다는 뜻으로 NEXT 버튼은 활성화되면 안됨.
     */

    if (classList.clientWidth > liList.length * 260 + Number(activeLi)) {
      slideNext.style.color = "#cfd8dc";
      slideNext.classList.remove("slide-next-hover");
      slideNext.removeEventListener("click", transformNext);
    }

    slidePrev.style.color = "rgb(0, 0, 44)";
    slidePrev.classList.add("slide-prev-hover");
    slidePrev.addEventListener("click", transformPrev);
  }
  classList.style.transition = "transform 1s";
  classList.style.transform = "translateX(" + String(activeLi) + "px)";
  classList.setAttribute("data-position", activeLi);
}

//  카드 화면 왼쪽으로 넘기기  //

function transformPrev(event) {
  const slidePrev = event.target;
  const slideNext = slidePrev.nextElementSibling;

  const classList = slidePrev.parentElement.parentElement.nextElementSibling;
  let activeLi = classList.getAttribute("data-position");
  const liList = classList.getElementsByTagName("li");

  // 한번의 카드화면이라도 오른쪽으로 이동했다면, 왼쪽화면으로 이동할 수 있음.
  if (Number(activeLi) < 0) {
    activeLi = Number(activeLi) + 260;

    // 오른쪽의 카드들이 왼쪽에서 밀려나가면,다시 오른쪽으로 갈 수있도록.
    slideNext.style.color = "rgb(0, 0, 44)";
    slideNext.classList.add("slide-next-hover");
    slideNext.addEventListener("click", transformNext);

    if (Number(activeLi) === 0) {
      slidePrev.style.color = "#cfd8dc";
      slidePrev.classList.remove("slide-prev-hover");
      slidePrev.removeEventListener("click", transformPrev);
    }
  }

  classList.style.transition = "transform 1s";
  classList.style.transform = "translateX(" + String(activeLi) + "px)";
  classList.setAttribute("data-position", activeLi);
}

const slideNextList = document.getElementsByClassName("slide-next");

//  표시할 화면보다 실제 컨텐츠가 넓을때 //
//  좌 우 화살표키 활성화 및 비활성화   //
//                                    //
for (let i = 0; i < slideNextList.length; i++) {
  //ul tag 선택
  let classList =
    slideNextList[i].parentElement.parentElement.nextElementSibling;
  let liList = classList.getElementsByTagName("li");

  // 카드가 ul 태그 너비보다 넘치면, 오른쪽(NEXT) 버튼을 활성화 하고, 왼쪽(PREV)
  // 는 현재 첫 카드 위치이므로 비활성화.
  if (classList.clientWidth < liList.length * 260) {
    slideNextList[i].classList.add("slide-next-hover");
    slideNextList[i].addEventListener("click", transformNext);
  } else {
    /* 태그 삭제시, 부모 요소에서 removeChild 를 통해 삭제해야 함 따라서 
  1. 먼저 부모 요소를 찾아서, 
  2. 부모 요소의 자식 요소로 있는 PREV와 NEXT 요소를 삭제함
  */
    const arrowContainer = slideNextList[i].parentElement;
    arrowContainer.removeChild(slideNextList[i].previousElementSibling);
    arrowContainer.removeChild(slideNextList[i]);
  }
}
