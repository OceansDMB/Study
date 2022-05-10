//if ~ else if ~else 조건문의 사용법을 예제로 설명해보시오.
//이 문제는 자바의 if ~ else if ~else 조건문을 사용할 수 있는지에 대해서 묻는 문제이다.
public class Problem_16 {
	public static void main(String[] args) {
		//[1] : 변수 선언
		int kor=70,eng=100,math=80;
		int total_score;
		total_score=kor+eng+math;
		
		//[2] : if ~ else if ~else 조건문 사용하기
		if(total_score>270) {
			System.out.println("당신의 점수는 " + total_score+"입니다.1");
		}
		else if(total_score>240) {
			System.out.println("당신의 점수는 " + total_score+"입니다.2");
		}
		else if(total_score>210) {
			System.out.println("당신의 점수는 " + total_score+"입니다.3");
		}
		else {
			System.out.println("당신의 점수는 " + total_score+"입니다.4");
		}
	}
}






















