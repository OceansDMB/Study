package report2;
import java.util.*;
public class report2_3 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		char day[] = {'��','��','ȭ','��','��','��','��'};	
		while (true) 
		{
			System.out.print("������ �Է��ϼ���>>");
		try {
		int n = sc.nextInt();
		if(n == -1) break;
		System.out.println(day[n%7]);
		} 
		catch (InputMismatchException e) {
		System.out.println("���! ���� �Է����� �ʾҽ��ϴ�.");
		sc.next(); 
}
}
		System.out.println("���α׷��� �����մϴ�...");
		sc.close();
	}
}