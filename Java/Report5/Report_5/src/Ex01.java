import java.util.*;

class per_info{
	Scanner scan = new Scanner(System.in);
	private String name;
	private int age;
	public String getName() {
		System.out.print("�̸�=");
		name = scan.next();
		return name;
	}// �̸� �Է¹޴� �޼���
	public int getAge() {
		System.out.print("����=");
		age = scan.nextInt();
		return age;
	}
	public void setNameAge() {
	System.out.println(name+"��!"+"\n�����"+age+"�� �̽ñ���!"); 			
	}
	
	per_info() {
	name = null;
	age = 0;
	}
}


public class Ex01 {
	public static void main(String[] args) {
		per_info p;
		p = new per_info();
		p.getName();
		p.getAge();
		p.setNameAge();
	}
}