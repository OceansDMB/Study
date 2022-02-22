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
      slidePrev.style.color = "rgb(190, 190, 190)";
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

/* ---------------------------------------------------------------- */
let touchstartX;
let currentClassList;
let currentImg;
let currentActiveLi;
let nowActiveLi;
let mouseStart;

function processTouchMove(event) {
  // preventDefault() : 해당 요소의 고유의 동작을 중단시키는 함수(이미지만 드래그로 이동하는 고유 동작 중단)
  event.preventDefault();

  // currentActiveLi: class-list 에서 data-position 으로 현재 카드 위치를 알아냄
  // touchstartX: 최초 요소의 x 좌표값
  // event.clientX: 드래그 중인 현재의 마우스 좌표값
  // (Number(event.clientX) - Number(touchstart(X)) 는 마우스가 얼만큼 이동중인지를 나타냄
  let currentX = event.clientX || event.touches[0].screenX;
  nowActiveLi =
    Number(currentActiveLi) + (Number(currentX) - Number(touchstartX));
  // 바로 즉시 마우스 위치에 따라, 카드를 이동함
  currentClassList.style.transition = "transform 0s linear";
  currentClassList.style.transform =
    "translateX(" + String(nowActiveLi) + "px)";
}
function processTouchStart(event) {
  mouseStart = true;

  // preventDefault() : 해당 요소의 고유의 동작을 중단시키는 함수(이미지만 드래그로 이동하는 고유 동작 중단)
  event.preventDefault();
  touchstartX = event.clientX || event.touches[0].screenX;
  currentImg = event.target;

  // 드래그 처리를 위해, 드래그 중(mousemove), 드래그가 끝났을 때(mouseup) 에 이벤트를 걸어줌
  currentImg.addEventListener("mousemove", processTouchMove);
  currentImg.addEventListener("mouseup", processTouchEnd);

  currentImg.addEventListener("touchmove", processTouchMove);
  currentImg.addEventListener("touchend", processTouchEnd);

  currentClassList = currentImg.parentElement.parentElement;
  currentActiveLi = currentClassList.getAttribute("data-position");
}

function processTouchEnd(event) {
  // preventDefault() : 해당 요소의 교유의 동작을 중단시키는 함수(이미지만 드래그로 이동하는 고유 동작 중단)
  event.preventDefault();

  if (mouseStart === true) {
    currentImg.removeEventListener("mousemove", processTouchMove);
    currentImg.removeEventListener("mouseup", processTouchEnd);

    currentImg.removeEventListener("touchmove", processTouchMove);
    currentImg.removeEventListener("touchend", processTouchEnd);

    // 맨 처음 카드가 맨 앞에 배치되도록 초기 상태로 이동
    currentClassList.style.transition = "transform 1s ease";
    currentClassList.style.transform = "translateX(0px)";
    currentClassList.setAttribute("data-position", 0);

    // 맨 처음 카드가 맨 앞에 배치된 상태로 화살표 버튼도 초기 상태로 변경
    let eachSlidePrev =
      currentClassList.previousElementSibling.children[1].children[0];
    let eachSlideNext =
      currentClassList.previousElementSibling.children[1].children[1];
    let eachLiList = currentClassList.getElementsByTagName("li");
    if (currentClassList.clientWidth < eachLiList.length * 260) {
      eachSlideNext.style.color = "rgb(0, 0, 44)";
      eachSlideNext.classList.add("slide-next-hover");
      eachSlideNext.addEventListener("click", transformNext);

      eachSlidePrev.style.color = "rgb(190, 190, 190)";
      eachSlidePrev.classList.remove("slide-prev-hover");
      eachSlidePrev.removeEventListener("click", transformPrev);
    }
  }
}

// 특정 요소를 드래그하다가, 요소 밖에서 드래그를 끝낼 수 있으므로, window 에 이벤트를 걸어줌
window.addEventListener("dragend", processTouchEnd);
window.addEventListener("mouseup", processTouchEnd);

// 인터페이스간의 오동작을 막기 위해, 카드 내의 이미지에만 드래그 인터페이스를 제공하기로 함
const classImgLists = document.querySelectorAll("ul li img");
for (let i = 0; i < classImgLists.length; i++) {
  // 해당 요소에 마우스를 누르면, 드랙그를 시작할 수 있으므로, 이벤트를 걸어줌
  classImgLists[i].addEventListener("mousedown", processTouchStart);
  classImgLists[i].addEventListener("touchstart", processTouchStart);
}
