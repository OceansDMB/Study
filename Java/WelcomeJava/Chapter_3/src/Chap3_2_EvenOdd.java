import java.util.Scanner;

public class Chap3_2_EvenOdd {
	public static void main(String[] args) {
		//if ���� ����Ͽ� Ȧ���� ¦���� �����ϴ� ���α׷�
		int number;
		Scanner input = new Scanner(System.in);
		System.out.println("������ �Է��Ͻÿ�.");
		number = input.nextInt();
		
		if (number %2 ==0) {
			System.out.println("�Էµ� ������ ¦���Դϴ�.");
		}
		else {
			System.out.println("�Էµ� ������ Ȧ���Դϴ�.");
		
		System.out.println("���α׷��� ����Ǿ����ϴ�.");
		}
	}
}
