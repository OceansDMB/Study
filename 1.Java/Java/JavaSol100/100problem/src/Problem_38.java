// 반환값이 있고 받는 인자값이 있는 대문자 출력 메서드를 구현해보시오.
// 메서드는("korea") 입력시 대문자로 출력되도록 구현한다.
// 이 문제는 자바의 메서드 작성법과 반환값, 인자값에 대한 이해가 있는지를 묻는 문제이다.


public class Problem_38 {
	public static String capitalMethod(String str) {
		String ret = str.toUpperCase();
		return ret;
	}
	
	public static void main(String[] args) {
		
		// [1] : 반환값 --> O		받는 인자값 --> O
		// 반환값이 있다는 것은 메서드(함수) 호출에 따른 리턴되는 값이 있다는 것이므로 호출시 리턴값을 받는 변수를 정의한다.		
		//--- 문자열 변수 선언
		String rst; 
		rst = capitalMethod("korea");
		
		// [2] : 출력
		System.out.println("입력한 소문자의 대문자는 = "+rst);
	}
}


/*	[결과 출력]
 --------------------------------------------------------------------
	입력한 소문자의 대문자는 KOREA
  
  */
 