import java.util.*;


public class Phone {
	private String name, tel;
	public Phone(String name, String tel) {
		this.name = name;
		this.tel = tel;
	}
	public String getName() {
		return name;
	}
	public String getTel() {
		return tel;
	}
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("�̸��� ��ȭ��ȣ �Է� >>");
		Phone number1 = new Phone(scan.next(),scan.next());
		System.out.println("�̸��� ��ȭ��ȣ �Է� >>");
		Phone number2 = new Phone(scan.next(),scan.next());
		
		
		System.out.println(number1.getName()+"�� ��ȣ "+number1.getTel());
		System.out.println(number2.getName()+"�� ��ȣ "+number2.getTel());
	scan.close();
	}
	
}