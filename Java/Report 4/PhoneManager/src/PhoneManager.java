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
		
		System.out.print("인원수>>");
		int persons = scan.nextInt();
		
		Phone[] Array = new Phone[persons];
		
		for(int i = 0; i<persons; i++) {
			System.out.print("이름과 전화번호(번호는 연속적으로 입력)>>");
			Array[i] = new Phone(scan.next(),scan.next());
		}
		System.out.println("저장되었습니다...");
		
		finder : while(true) {
			System.out.print("검색할 이름>>");
			String findName = scan.next();
			
			for(int i=0;i<persons;i++) {
				if(findName.equals("exit")) {
					break finder;
				}
			else if(findName.equals(Array[i].getName())) {
				System.out.println(Array[i].getName()+"의 번호는 "+Array[i].getTel()+" 입니다.");
				}
			else if(!findName.equals(Array[i].getName()) && i == (persons-1)) {
				System.out.println(findName+" 이(가) 없습니다.");
				}
			}
		}
		scan.close();
		System.out.println("프로그램을 종료합니다...");	
	}
}

