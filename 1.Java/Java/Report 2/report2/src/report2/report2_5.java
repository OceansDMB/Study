package report2;
import java.util.*;
public class report2_5 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		String eng[] = {"student","love","java","happy","future"};
		String kor[] = {"�л�","���","�ڹ�","�ູ��","�̷�"};
		
		while(true)
		{
			System.out.print("���� �ܾ �Է��ϼ���>>");
			int i;
			String s = sc.next();
			
			if(s.equals("exit")) break;
			
			for (i = 0; i < eng.length; i++) {
				if(s.equals(eng[i])) {
					System.out.println(kor[i]);
					break;
				}
				if(i == eng.length - 1) System.out.println("�׷� ���� �ܾ �����ϴ�.");
			}
		}
		System.out.println("�����մϴ�...");
		sc.close();
	}
}