public class Problem_11{
	public static void main(String[] args) {
		// System.out.print(),println(),printf()� ���ؼ� ������ ���� �����غ��ÿ�.
		// �̶� 10���� 10�� ���ؼ� 8����, 16������ ���� ����غ��ÿ�.
		// �� ������ ��½� ���� ���Ǵ� print(),println(),printf()���Ŀ� ���� �˰� �ִ����� ���� �����̴�.
		
		//[1]:�⺻�� Ÿ��-->8��-->���� ����� ���ÿ� ���� �Է�
		byte b = 10;
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
		System.out.printf("���� %f���� ���л��Դϴ�.%n �ٹٲ� %d,%d,%d �Ҽ������� -->,%.1f,%.2f,����-->%c,�Ҹ��� -->%b",d,s,i,l,f,d,c,bl);
		System.out.println();
		System.out.printf("10���� 10�� 8�����δ� %o �̰� 16�����δ� %x�̴�",b,b);
		// ������ ���� print ����ؼ� ���� ������, 
		}
}