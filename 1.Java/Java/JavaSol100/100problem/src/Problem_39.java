// static ������ �ȵǾ��ִ� �޼��带 ����ϴ� ����� ���ؼ� �ڵ�� �����غ��ÿ�. 
// �� ������ ���� �޼��忡�� static ������ ���� �޼��带 ����ϴ� ����� ���ؼ� �ϴ����� ���� �����̴�.
// Ŭ������ ��ü�� ���� ���� �н��� �ʿ��ϹǷ� �̿� ���� �н� �� ������ �ٽ� Ǯ��°��� ����.


public class Problem_39 {
	
	public void helloWorld() {
		System.out.println("Hello World");
	}
	
	public static void main(String[] args){		
		
		
		// [1] : �޼��� ȣ��
		// helloWorld()  //---  ���� �޼���� static �޼��常 ȣ���� �� �ֱ� ������ ����---;;
		
		// [2] : ��ü ���� �� �޼��� ȣ��
		Problem_39 jes = new Problem_39();
		
		jes.helloWorld();
	}
	}
