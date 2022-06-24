        // 전역변수로 선언
        var $gigu = null;
        $(document).ready(function(){
            initialize();
            event_gigu();
        });
        // 전역 변수를 초기화
        function initialize(){
            $gigu=$("#gigu");
        };
        // 이벤트와 관련된 내용을 함수로 등록
        function event_gigu(){
            $("#btnStart").click(function(){
            // 지구본 움직이기
            // 지구본 위치 값 구하기
            var x = parseInt($("#txtX").val());
            var y = parseInt($("#txtY").val());
            moveGigu(x,y);
        });
    }
        function moveGigu(x,y){
            if((x >= 0 && x <= 500) && (y >= 0 && y <= 400)){
                $gigu.css({
                    left : x,
                    top : y
                });
            }
            else {
                alert("입력된 값이 범위를 벗어났습니다.");
            }
        };