//��ø�� if ���ǹ��� ����ϴ� ������ �����ÿ�.
//�� ������ if ���ǹ��� ��ø�Ͽ� ����ϴ� ����� ���ؼ� �˰� �ִ����� ���� �����̴�.
public class Problem_17 {
	public static void main(String[] args) {
		//[1] : ���� ����
		int kor=70,eng=70,math=59;
		int total_score;
		total_score=kor+eng+math;
		
		//[2] : if ~ else if ~else ���ǹ� ����ϱ�
		if(total_score>270) {
			System.out.println("����� ������ " + total_score+"�Դϴ�.�ſ�Ź�");
		}
		else if(total_score>240) {
			System.out.println("����� ������ " + total_score+"�Դϴ�.2");
		}
		else if(total_score>210) {
			System.out.println("����� ������ " + total_score+"�Դϴ�.3");
		}
		else {
			if(math>=60) {
				System.out.println("����� ������ " + total_score+"�Դϴ�.���������ڰ� �ƴմϴ�.");
			}
			System.out.println("����� ������ " + total_score+"�Դϴ�.����� ������Դϴ�.");
		}
	}
}








