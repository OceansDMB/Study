
public class report1_3 {

	public static void main(String[] args) {
		/* �ش��ϴ� x�� y���� ����ϴ� ���α׷�
		   y= 3x^3 + 2x^2 + x + 5, x�� 5���� 10���� 0.5�� �����ϵ���
		*/
		double y; 
		for(double x=5; x<=10; x+= 0.5) {
			y = 3*x*x*x+2*x*x+x+5;
			System.out.println("x= " + x + " y= "+y);
		}
	}
}