const backToTop = document.getElementById("backtotop");

function checkScroll() {
  /* 
        웹 페이지가 수직으로 얼마나 스크롤되었는지를 확인하는 값
        (픽셀 단위로 변환)
        https://developer.mozilla.org/ko/docs/Web/API/window/pageYOffset
    */

  let pageYOffset = window.pageYOffset;

  if (pageYOffset !== 0) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
}

function moveBackToTop() {
  if (window.pageYOffset > 0) {
    /* 
        smooth 하기 scroll 하기 
        https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo
      */
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

window.addEventListener("scroll", checkScroll);
backToTop.addEventListener("click", moveBackToTop);
