import java.util.Scanner;

public class Scanner2 {  //class �����Ҷ� �̹� ����� ���� ���ܾ��� ���� ����
	public static void main(String args[]) {
		System.out.println("�̸�,����,����,ü��,���� ���θ� ��ĭ���� �и��Ͽ� �Է��ϼ���.");
		Scanner scanner = new Scanner(System.in);
		
		String name = scanner.next();
		System.out.print("�̸���" + name + ",");

		String city = scanner.next();
		System.out.print("���ô�" + city + ",");

		int age = scanner.nextInt();
		System.out.print("���̴�" + age + "��,");
		
		double weight = scanner.nextDouble();
		System.out.print("ü����" + weight + "kg,");
		
		boolean single = scanner.nextBoolean();
		System.out.print("ü����" + single + "�Դϴ�.");
		
		scanner.close();//scanner �ݱ�

		
		scanner.close();
	}

}