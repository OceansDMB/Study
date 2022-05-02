
public class Java100_operator_ArithmeticOperators2 {
  // 수치 연산자를 사용한 연산에서 소숫점 결과가 예상과 다르게 나오는 것에 대해서 설명해보시오.
  // 아래의 코드 결과가 올바르게 나오도록 수정해보시오.
  // 이 문제는 자바의 기본적인 수치 연산자에 대해서 알고 있는지를 묻는 문제이다.
	public static void main(String[] args) {
	
	int a=60,b=8;
	double rst1,rst2,rst3;
	rst1= a/b;
	System.out.println(rst1);
	System.out.println((double)rst1);
	rst2 = 2;
	rst3 = 100/(double)3;
	System.out.println(rst3+rst2);
	System.out.printf("세 과목의 평균은%.1f입니다.",rst3);
	}
}
