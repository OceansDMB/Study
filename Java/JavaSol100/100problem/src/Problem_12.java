public class Problem_12{
	public static void main(String[] args) {
		//정수형(int)을 문자열(String)로 변환하여 정수의 자릿수를 구하는 코드를 구현해보시오.
		//정수 12345를 입력하면 자릿수가 "5"로 출력되도록 한다.
		//이 문제는 정수형을 문자열로 문자열을 정수형으로 변환하는 방법에 대해서 아는지를 묻는 문제이다.
		
		//[1]:정수선언
		int a = 12345;
		String str="12345";
		// System.out.println(String.valueOf(a).length());
		System.out.println(str.length()); //5
		
		//[2]:정수-->문자열로변환-->자릿수 구하기
		String stra = String.valueOf(a);
		System.out.println(stra.length());
		 System.out.println(String.valueOf(a).length());
		
		//[3]:문자열 + 정수형 =?
		System.out.println(12345+1);
		System.out.println();
		 
		/*
		 * [결과출력]
		 * -------------------------------------------------------------
		 * [1] --> 5
		 * [2] --> 5
		 * [3] --> 12346 
		 * [3] --> 123451
		 * [4] --> 12346
		 * 
		 * */
		//[!]: 바꾸는 이유?
		//정수형끼리의 연산이 아닌 경우 더하기 연산 등을 수행했을 떄 문자가 합쳐지는 결과가 나올 수 있기때문.
		//연산외에도 메서드 호출시 인자값을 정수로 보내서 문자열로 처리하는 또는 반환하는 경우에도 필요함.
		//변환하는 방법은 여러가지가 있다.
	}
}