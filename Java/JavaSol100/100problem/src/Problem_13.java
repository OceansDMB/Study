public class Problem_13{
	//수치 연산자에 대해서 설명해보시오.
	// 이 문제는 자바의 기본적인 수치 연산자에 대해서 알고 있는지를 묻는 문제이다.
	
	public static void main(String[] args) {
		//[!]:수치연산자-->+,-,*,/(몫),%(나머지연산자)
		
		int a,b,c,d;
		a=60;b=8;c=300;d=400;
		
		System.out.println(a+b);
		System.out.println("a+b = "+a+b);  // 608 
		System.out.println("a+b = "+(a+b));// 68또는 별도의 변수에 결과값(68)을 저장하여 사용.
		System.out.println("a-b = "+(a-b));// 52
		System.out.println("a*b = "+(a*b));// 480
		System.out.println("a/b = "+(a/b));// 7(몫)
		System.out.println("a%b = "+(a%b));// 4(나머지)
		
	}
}