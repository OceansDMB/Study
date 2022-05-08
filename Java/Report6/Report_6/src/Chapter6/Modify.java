package Chapter6;
import java.util.Scanner;
public class Modify {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		while(true) {
			System.out.print(">> ");
			String s = sc.nextLine();
			StringBuffer sb = new StringBuffer(s);
			if(s.equals("exit")) {
				System.out.println("종료합니다..");
				break;
			}
			int index = (int)(Math.random()*s.length());
			while(true) {
				int i = (int)(Math.random()*26);
				char c = (char)('a' + i);
				if(!sb.equals(c)) {
					sb.replace(index, index+1, Character.toString(c));
					break;
				}
			}
			System.out.println(sb);
		}
	}
}