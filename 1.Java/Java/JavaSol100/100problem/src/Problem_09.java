public class Problem_09{
	public static void main(String[] args) {
		// �⺻�� Ÿ���� ���� �ʱ�ȭ�� �Ʒ��� �ڵ忡�� Ʋ�� ���� ã�� �����Ͻÿ�.
		// �� ������ �⺻�� Ÿ���� ���� �ʱ�ȭ�ϴ� ����� ���ؼ� �˰� �ִ����� ���� �����̴�.
		
		// [1] : �⺻�� Ÿ�� --> 8�� --> ���� ����� ���ÿ� ���� �Է�
		byte b = 100;
		short s = 30000;
		int i = 2100000000;
		long l = 7000000000L;
		float f = 9.8F;
		double d = 3.14;
		char c = 'A';
		boolean bl = false;
		// [2] : ���
		System.out.println(b+" byte �ִ�-->" + Byte.MAX_VALUE);
		System.out.println(s+" short �ִ�-->" + Short.MAX_VALUE);
		System.out.println(i+" int  �ִ� -- > "+ Integer.MAX_VALUE);
		System.out.println(l+" long �ִ� --> " + Long.MAX_VALUE);
		System.out.println(f+" float �ִ� -->" + Float.MAX_VALUE);
		System.out.println(d+" double �ִ� -->" + Double.MAX_VALUE);
		System.out.println(c+" char �ִ� -->"+ (int)Character.MAX_VALUE);
		System.out.println(bl);
	}
}