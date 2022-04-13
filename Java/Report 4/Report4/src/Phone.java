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
		
		System.out.println("이름과 전화번호 입력 >>");
		Phone number1 = new Phone(scan.next(),scan.next());
		System.out.println("이름과 전화번호 입력 >>");
		Phone number2 = new Phone(scan.next(),scan.next());
		
		
		System.out.println(number1.getName()+"의 번호 "+number1.getTel());
		System.out.println(number2.getName()+"의 번호 "+number2.getTel());
	scan.close();
	}
	
}
