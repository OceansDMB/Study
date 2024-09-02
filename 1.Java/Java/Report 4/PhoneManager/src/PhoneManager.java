import java.util.*;
	class Phone{
			private String name,tel;
			
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
	}
public class PhoneManager {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.print("ㅁㄴㅇ>>");
		int persons = scan.nextInt();
		
		Phone[] Array = new Phone[persons];
		
		for(int i = 0; i<persons; i++) {
			System.out.print("�̸��� ��ȭ��ȣ(��ȣ�� ���������� �Է�)>>");
			Array[i] = new Phone(scan.next(),scan.next());
		}
		System.out.println("����Ǿ����ϴ�...");
		
		finder : while(true) {
			System.out.print("�˻��� �̸�>>");
			String findName = scan.next();
			
			for(int i=0;i<persons;i++) {
				if(findName.equals("exit")) {
					break finder;
				}
			else if(findName.equals(Array[i].getName())) {
				System.out.println(Array[i].getName()+"�� ��ȣ�� "+Array[i].getTel()+" �Դϴ�.");
				}
			else if(!findName.equals(Array[i].getName()) && i == (persons-1)) {
				System.out.println(findName+" ��(��) �����ϴ�.");
				}
			}
		}
		scan.close();
		System.out.println("���α׷��� �����մϴ�...");	
	}
}

