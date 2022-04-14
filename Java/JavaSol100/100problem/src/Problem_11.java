public class Problem_11{
	public static void main(String[] args) {
		// System.out.print(),println(),printf()등에 대해서 예제를 통해 설명해보시오.
		// 이때 10진수 10에 대해서 8진수, 16진수로 각각 출력해보시오.
		// 이 문제는 출력시 많이 사용되는 print(),println(),printf()형식에 대해 알고 있는지를 묻는 문제이다.
		
		//[1]:기본형 타입-->8개-->변수 선언과 동시에 값을 입력
		byte b = 127;
		short s = 32767;
		int i = 2147483647;
		long l = 7000000000L;
		float f = 9.8F;
		double d = 3.14;
		char c = 'A';
		boolean bl = false; 
		
		//[2]:print(),pirntln()
		System.out.print("결과");
		System.out.println("결과?");// 쓰고 난 뒤에 한줄 띄우는거임. 이대로 써도 그대로 한줄로 나옴

		//[3]:printf()출력-->지시자를 사용
		// %d(정수)
		System.out.printf("vvvv",b);
		
		}
}