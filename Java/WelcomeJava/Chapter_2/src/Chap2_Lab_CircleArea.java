import java.util.*;

public class Chap2_Lab_CircleArea {
	public static void main(String[] args) {
		
		double radius;
		double area;
		Scanner input = new Scanner(System.in);
		System.out.println("�������� �Է��Ͻÿ�.");
		radius = input.nextDouble();
		area = 3.14 * radius * radius ; 
		
		System.out.println(area);
	}
}
