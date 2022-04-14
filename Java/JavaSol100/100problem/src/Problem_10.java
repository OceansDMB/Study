
public class Problem_10 {
	//정수형 변수를 문자형으로 형(Type) 변환시켜서 출력하면 어떤 결과가 나오는지 말해보시오.
	//아래 코드의 결과를 예상하여 말해보시오.
	//이 문제는 정수형과 문자형의 타입 변환시 일어나는 변화에 대해서 알고 있는지를 묻는 문제이다.
	public static void main(String[] args) {
		
		//[1]
		short a = 'A'; // 대문자 A 에 해당되는 아스키코드 테이블표 상 정수형값 출력=65
		short z = 'Z'; // 대문자 A 에 해당되는 아스키코드 테이블표 상 정수형값 출력=65
		// 문자형으로 받을 시 그대로 A가 출력됨.
		System.out.println(a); //===A(65)
		System.out.println(z); //===A(65)+26-1=Z(90)		
		
		//[2]
		short b= 90;
		System.out.println((char)b); // 90번째 10진법 ASCII table 인 Z
		
		//[3]
		char c = 'z';
		System.out.println((short)c); //---a(97)+(26-1) =z(122)
	}
}
