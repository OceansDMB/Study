package report2;
import java.util.*;
public class report2_8 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String str[] = {"����", "����", "��"};
		int i;
		while(true)
		{
			int n = (int)(Math.random()*3); 
			System.out.println("��ǻ�Ϳ� ���� ���� �� ������ �մϴ�.");
			System.out.print("���� ���� ��!>>");
			
			String s = sc.next();
			if(s.equals("�׸�")) break;
			
			for (i = 0; i < str.length; i++) {
				if(s.equals(str[i])) break;
			}
			
			if(i == n) // ��� ���
			{
				System.out.println("����ڴ� = "+str[i]+", ��ǻ�� = "+str[n]+", �����ϴ�.");
			}
			else if(i == 0 && n == 2 || i == 1 && n == 0 || i == 2 && n == 1) // ����ڰ� �̱���
			{
				System.out.println("����ڴ� = "+str[i]+", ��ǻ�� = "+str[n]+", ����ڰ� �̰���ϴ�.");
			}
			else// ��ǻ�Ͱ� �̱� ���
			{
				System.out.println("����ڴ� = "+str[i]+", ��ǻ�� = "+str[n]+", ��ǻ�Ͱ� �̰���ϴ�.");
			}			
		}
		System.out.println("������ �����մϴ�...");
		sc.close();
	}
}