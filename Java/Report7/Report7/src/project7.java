import java.util.*;

public class project7 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int number= 0;
		while(number !=4) {
			System.out.println("1.�� 2.�簢�� 3.���� 4.���� : ");				
				number = sc.nextInt();
				if(number == 1) {
					System.out.print("x=");
					int x = sc.nextInt();
					System.out.print("y=");
					int y = sc.nextInt();
					System.out.print("r=");
					int r = sc.nextInt();
				}
				if(number == 2) {
					System.out.print("x=");
					int x = sc.nextInt();
					System.out.print("y=");
					int y = sc.nextInt();
					System.out.print("w=");
					int w = sc.nextInt();
					System.out.print("h=");
					int h = sc.nextInt();
				}
				if(number == 3) {
					System.out.println("-------- ���� --------");
					System.out.printf("��(x,y) = (%f,%f)");
				}
				if(number ==4) {
					System.out.println("�����ϼ̽��ϴ�.");					
				}
		}
		
	}
}
