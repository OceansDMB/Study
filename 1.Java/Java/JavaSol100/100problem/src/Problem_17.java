//중첩된 if 조건문을 사용하는 예제를 만들어보시오.
//이 문제는 if 조건문을 충첩하여 사용하는 방법에 대해서 알고 있는지를 묻는 문제이다.
public class Problem_17 {
	public static void main(String[] args) {
		//[1] : 변수 선언
		int kor=70,eng=70,math=59;
		int total_score;
		total_score=kor+eng+math;
		
		//[2] : if ~ else if ~else 조건문 사용하기
		if(total_score>270) {
			System.out.println("당신의 점수는 " + total_score+"입니다.매우매무");
		}
		else if(total_score>240) {
			System.out.println("당신의 점수는 " + total_score+"입니다.2");
		}
		else if(total_score>210) {
			System.out.println("당신의 점수는 " + total_score+"입니다.3");
		}
		else {
			if(math>=60) {
				System.out.printf("당신의 점수는 %d점이고, 수학점수는 %d점입니다. 수학이 60점 이상이므로 재수강 대상자는 아닙니다.",total_score,math);
			}
			else {
				System.out.printf("당신의 점수는 %d점이고, 수학점수는 %d점입니다. 수학이 60점 미만이므로 재수강 대상자입니다.",total_score,math);
			}
			
		}
	}
}








