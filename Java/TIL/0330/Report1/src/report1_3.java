
public class report1_3 {

	public static void main(String[] args) {
		/* 해당하는 x와 y값을 출력하는 프로그램
		   y= 3x^3 + 2x^2 + x + 5, x는 5에서 10사이 0.5씩 증가하도록
		*/
		double y; 
		for(double x=5; x<=10; x+= 0.5) {
			y = 3*x*x*x+2*x*x+x+5;
			System.out.println("x= " + x + " y= "+y);
		}
	}
}