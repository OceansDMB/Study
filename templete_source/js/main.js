const backToTop = document.getElementById("backtotop");

function checkScroll() {
  /* 
        웹 페이지가 수직으로 얼마나 스크롤되었는지를 확인하는 값
        (픽셀 단위로 변환)
        https://developer.mozilla.org/ko/docs/Web/API/window/pageYOffset
    */

  let pageYOffset = window.pageXOffset;

  if (pageYOffset !== 0) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
}

function moveBackToTop() {
    if (window.pageYOffset)
}

window.addEventListener("scroll", checkScroll);
backToTop.addEventListener("click", moveBackToTop);
