
public class Java100_operator_LogicalOperators {
//논리 연산자에 대해서 설명해보시오.
//참, 거짓을 판단하는 문장을 가지고 논리 연산자를 사용해보시오.
// 이 문제는 자바의 기본적인 논리 연산자에 대해서 알고 있는지를 묻는 문제이다.

//[!]:논리 연산자 -> && ||(이항연산자) !(단항연산자)
// &&(and) ||(or) !(not)
	public static void main(String[] args) {
// 관계연산자와 마찬가지로 결과로써 나오는 값은 참(true),거짓(false)으로 나오므로 결과를 받는 타입은 boolean.
		//A && B	-->A그리고B가 모두 참이어야 참.
		//A || B	-->A또는B가 하나라도 참이면 참.
		//!A 		-->반대로 A가 참이면 거짓으로,거짓이면 참으로.
	int a=10,b=20,c=30;
	
	boolean rst1=a<b && c>b;
	System.out.println(rst1);	//true
	
	boolean rst2=a<b || c<b;
	System.out.println(rst2);	//true
	
	boolean rst3=a>c ||b!=c;
	System.out.println(rst3);	//true
	
	boolean rst4= !(a<b);
	System.out.println(rst4);	//false
	
	boolean rst5= !rst4;
	System.out.println(rst5);	//true
	
	}
}
