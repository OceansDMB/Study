
public class Java100_operator_LogicalOperators {
//�� �����ڿ� ���ؼ� �����غ��ÿ�.
//��, ������ �Ǵ��ϴ� ������ ������ �� �����ڸ� ����غ��ÿ�.
// �� ������ �ڹ��� �⺻���� �� �����ڿ� ���ؼ� �˰� �ִ����� ���� �����̴�.

//[!]:�� ������ -> && ||(���׿�����) !(���׿�����)
// &&(and) ||(or) !(not)
	public static void main(String[] args) {
// ���迬���ڿ� ���������� ����ν� ������ ���� ��(true),����(false)���� �����Ƿ� ����� �޴� Ÿ���� boolean.
		//A && B	-->A�׸���B�� ��� ���̾�� ��.
		//A || B	-->A�Ǵ�B�� �ϳ��� ���̸� ��.
		//!A 		-->�ݴ�� A�� ���̸� ��������,�����̸� ������.
	int a=10,b=20,c=30;
	
	boolean rst1=a<b && c>b;
	System.out.println(rst1);	//true
	
	boolean rst2=a<b || c<b;
	System.out.println(rst2);	//true
	
	boolean rst3=a>c ||b!=c;
	System.out.println(rst3);	//true
	
	boolean rst4= !(a<b);
	System.out.println(rst4);	//false
	
	boolean rst5= !rst4;
	System.out.println(rst5);	//true
	
	}
}
