// ũ�� 5�� ������ �迭�� �����ϰ� 55,88,60,100,90 ���� �� ����� ���� �ʱ�ȭ�Ͻÿ�.
// �� ������ �迭 ����� ���ÿ� Ư�� ������ �ʱ�ȭ �� �� �ִ����� ���� �����̴�.
// �̶�, 2���� ������� �ʱ�ȭ �� �� �ִµ� ��� �ۼ��غ��ÿ�.
// �Ʒ� �ڵ� �� Ʋ������ ã�� ���غ��ÿ�.

public class Problem_26 {
	public static void main(String[] args) {
		
		//[1] : �迭 ����� ���ÿ� Ư�� ������ �ʱ�ȭ
		int[] sales_table = {55,88,60,100,90};
		System.out.println(sales_table[1]);
		
		//[2] 
		int[] sales_table2 = new int[] {55,88,60,100,90};
		System.out.println(sales_table2[2]); //--- 1�� ��ĺ��� ���� --;;
		
		//[3]
		int[] sales_table3;
		// sales_table3 = {55,88,60,100,90}; //Err
		sales_table3 = new int[]{55,88,60,100,90};
		System.out.println(sales_table3[3]);
	}
}

//  [1]
/*	int[] sales_table = {55,88,60,100,90};
 	System.out.println(sales_table[1]);
 	
	[2]
	int[] sales_table2 = new int[] {55,88,60,100,90};
	System.out.println(sales_table[2]);
	
	[3]
	int[] sales_table3;
	sales_table3 = {55,88,60,100,90};
	System.out.println(sales_table[3]); // Err
  
 */
