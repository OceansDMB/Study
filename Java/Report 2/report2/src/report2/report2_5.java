package report2;
import java.util.*;
public class report2_5 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		String eng[] = {"student","love","java","happy","future"};
		String kor[] = {"학생","사랑","자바","행복한","미래"};
		
		while(true)
		{
			System.out.print("영어 단어를 입력하세요>>");
			int i;
			String s = sc.next();
			
			if(s.equals("exit")) break;
			
			for (i = 0; i < eng.length; i++) {
				if(s.equals(eng[i])) {
					System.out.println(kor[i]);
					break;
				}
				if(i == eng.length - 1) System.out.println("그런 영어 단어가 없습니다.");
			}
		}
		System.out.println("종료합니다...");
		sc.close();
	}
}
