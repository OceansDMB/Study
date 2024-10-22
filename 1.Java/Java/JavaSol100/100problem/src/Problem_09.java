public class Problem_09{
	public static void main(String[] args) {
		// 기본형 타입의 값을 초기화한 아래의 코드에서 틀린 곳을 찾아 수정하시오.
		// 이 문제는 기본형 타입의 값을 초기화하는 방법에 대해서 알고 있는지를 묻는 문제이다.
		
		// [1] : 기본형 타입 --> 8개 --> 변수 선언과 동시에 값을 입력
		byte b = 100;
		short s = 30000;
		int i = 2100000000;
		long l = 7000000000L;
		float f = 9.8F;
		double d = 3.14;
		char c = 'A';
		boolean bl = false;
		// [2] : 출력
		System.out.println(b+" byte 최댓값-->" + Byte.MAX_VALUE);
		System.out.println(s+" short 최댓값-->" + Short.MAX_VALUE);
		System.out.println(i+" int  최댓값 -- > "+ Integer.MAX_VALUE);
		System.out.println(l+" long 최댓값 --> " + Long.MAX_VALUE);
		System.out.println(f+" float 최댓값 -->" + Float.MAX_VALUE);
		System.out.println(d+" double 최댓값 -->" + Double.MAX_VALUE);
		System.out.println(c+" char 최댓값 -->"+ (int)Character.MAX_VALUE);
		System.out.println(bl);
	}
}