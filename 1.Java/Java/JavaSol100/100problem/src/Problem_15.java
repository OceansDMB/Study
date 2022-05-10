
public class Problem_15 {
	public static void main(String[] args) {
		
		//[1]:변수 선언
		int kor=80,eng=0,math=100;
		
		//[2]:if 조건문만 사용하기
		if(kor >=80)
			System.out.println("당신의 국어 점수는 B학점입니다.");

		System.out.println("학점이 안 나왔다면 80점이 안되서입니다.");
		System.out.println("---------------------------------");
		
		//[3]:if~else 조건문 사용하기
		if(eng >=90) {
			System.out.println("A학점입니다.");
			System.out.println("축하해요~");
		}
		else {
			System.out.println("90점 미만입니다.");
		}
	}
}
