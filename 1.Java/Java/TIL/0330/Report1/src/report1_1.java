
public class report1_1 {

	public static void main(String[] args) {
		/* 1���� 100 ������ ���� �߿��� 2,3,5,7�� ����� ������ ���� 
		 �� �࿡ 10���� ����ϴ� ���α׷� �ۼ��ϱ�.*/
		int counters = 0;
		
		for (int i = 1; i <= 100; i++) {
			if (i%2==0 || i%3==0 || i%5==0 || i%7==0) {}
			else {
			System.out.print(i+" ");
			counters++;
			if (counters%10 == 0)
				System.out.println();
}
}
}
}