// 반환값이 있고 받는 인자값이 없는 메서드를 구현해보시오.
// 이 문제는 자바의 메서드 작성법과 반환값, 인자값에 대한 이해가 있는지를 묻는 문제이다.

public class Problem_37 {
	public static int returnMethod(){
		int ret = 100;
		ret *= 100;
		
		return ret; // --- 10000
	}
	
	
	
	public static void main(String[] args) {
		
		// [1] : 반환값 --> O 	받는 인자값 --> X
		// 반환값이 있다는 것은 메서드(함수) 호출에 따른 리턴값이 있는 것이므로 호출시 리턴값을 받는 변수를 정의한다.
		int rst;
		rst = returnMethod();
		
		// [2] : 출력
		System.out.println("메서드 호출에 따른 리턴된 값은 = "+rst);
	
	}
}
