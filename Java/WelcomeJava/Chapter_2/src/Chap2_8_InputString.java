import java.util.*;

public class Chap2_8_InputString {
	public static void main(String[] args) {
		String name;
		int age;
		
		Scanner input = new Scanner(System.in);
		
		System.out.print("�̸��� �Է��Ͻÿ�:");
		name = input.nextLine();
		
		System.out.println("���̸� �Է��Ͻÿ�:");
		age = input.nextInt();
		
		System.out.println(name + "�� �ȳ��ϼ���!" + (age) + "���̽ó׿�.");
		
	}
	
}
