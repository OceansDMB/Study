
public class QuadraticEq {

	public static void main(String[] args) {
		double b = -3.0;
		double c = 2.0;
		
		double disc = b*b - 4.0 * c;
		double sqr = Math.sqrt(disc);
		
		double r1 = (-b + sqr) / 2.0;
		double r2 = (-b - sqr) / 2.0;
		
		System.out.println("근은 " + r1);
		System.out.println("근은 " + r2);
	}
}
