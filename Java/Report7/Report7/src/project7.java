import java.util.*;

public class project7 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int number= 0;
		while(number !=4) {
			System.out.println("1.원 2.사각형 3.보기 4.종료 : ");				
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
					System.out.println("-------- 보기 --------");
					System.out.printf("점(x,y) = (%f,%f)");
				}
				if(number ==4) {
					System.out.println("수고하셨습니다.");					
				}
		}
		
	}
}
