$(document).ready(function () {
  //지구이미지 웹요소(노드) 찾아서 저장
  let $earth = $("#earth");
  //버튼에 이벤트 등록.(2s 만에 left값 480px 설정)
  //버튼 클릭시 콜백함수 실행.
  $("#btnStart").click(function () {
    $earth.animate(
      {
        left: "480px",
      },
      2000
    );
  });
});
