package report2;
import java.util.*;
public class report2_7_1 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("���ĺ� �� ���ڸ� �Է��ϼ���>>");
		String s = sc.next();
		char c = s.charAt(0);
		
		for (int i = 0; i <= c-'a'; i++) {
			for (int j = i; j <= c-'a'; j++) {
				System.out.print((char)('a'+j));
			}
			System.out.println();
		}
		sc.close();
	}
}