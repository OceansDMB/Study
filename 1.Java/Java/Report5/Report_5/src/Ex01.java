import java.util.*;

class per_info{
	Scanner scan = new Scanner(System.in);
	private String name;
	private int age;
	public String getName() {
		System.out.print("이름=");
		name = scan.next();
		return name;
	}// 이름 입력받는 메서드
	public int getAge() {
		System.out.print("나이=");
		age = scan.nextInt();
		return age;
	}
	public void setNameAge() {
	System.out.println(name+"님!"+"\n당신은"+age+"세 이시군요!"); 			
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
