public class Problem_11{
	public static void main(String[] args) {
		// System.out.print(),println(),printf()� ���ؼ� ������ ���� �����غ��ÿ�.
		// �̶� 10���� 10�� ���ؼ� 8����, 16������ ���� ����غ��ÿ�.
		// �� ������ ��½� ���� ���Ǵ� print(),println(),printf()���Ŀ� ���� �˰� �ִ����� ���� �����̴�.
		
		//[1]:�⺻�� Ÿ��-->8��-->���� ����� ���ÿ� ���� �Է�
		byte b = 21;
		short s = 32767;
		int i = 2147483647;
		long l = 7000000000L;
		float f = 9.8F;
		double d = 3.14;
		char c = 'A';
		boolean bl = false; 
		
		//[2]:print(),pirntln()
		System.out.print("���");
		System.out.println("���?");// ���� �� �ڿ� ���� ���°���. �̴�� �ᵵ �״�� ���ٷ� ����

		//[3]:printf()���-->�����ڸ� ���
		// %d(����)%f(�Ҽ�������),%c(����),%s(���ڿ�),%b(��),%n(�ٹٲ�)
		System.out.printf("���� %f���� ���л��Դϴ�.%d,%d,%d,%.1f,%.2f",d,s,i,l,f,d);
		// ������ ���� print ����ؼ� ���� ������, 
		}
}