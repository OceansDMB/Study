import java.util.*;

public class Chap2_Lab_Box {
	public static void main(String[] args) {
		double w;
		double h;
		double area;
		double perimeter;
		
		Scanner input = new Scanner(System.in);
		
		
		System.out.println("�簢���� ���θ� �Է��ϼ���.");
		w = input.nextInt();
		System.out.println("�簢���� ���θ� �Է��ϼ���.");
		h = input.nextInt();
		
		area = w*h;
		perimeter = w + h * 2.0;
		
		System.out.println("�簢���� ���̴� " + area);
		System.out.println("�簢���� �ѷ��� " + perimeter);
	}
}
