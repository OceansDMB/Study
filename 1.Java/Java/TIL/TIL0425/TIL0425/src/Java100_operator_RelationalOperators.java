
public class Java100_operator_RelationalOperators {
//���� �����ڿ� ���ؼ� �����غ��ÿ�.
//�� ������ �ڹ��� �⺻���� ���� �����ڿ� ���ؼ� �˰� �ִ����� ���� �����̴�.
	public static void main(String[] args) {
		//[!]:���迬����-->==,!=,>,>=,<,<=
		//���� �����ڸ� ����ؼ� ������ �����ϸ� �� ����� ��(true),����(false)�� �ȴ�.
		//����, �� ����� �޴� Ÿ���� boolean.
		int kor=70,eng=40,math=70;
		boolean rst1,rst2,rst3,rst4,rst5,rst6;
		
		rst1 = kor==eng; // false
		rst2 = kor!=eng; // true
		rst3 = kor>eng;  //true
		rst4 = kor>=math; //true
		rst5 = kor<eng; //false
		rst6 = kor<=eng; //false
		System.out.println(rst1);
		System.out.println(rst2);
		System.out.println(rst3);
		System.out.println(rst4);
		System.out.println(rst5);
		System.out.println(rst6);
	}
}
