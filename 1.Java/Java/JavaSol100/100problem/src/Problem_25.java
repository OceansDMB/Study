// �迭 ��ҿ� ������ ���� �������� ��� �ؾ� �ϴ��� �ۼ��غ��ÿ�.
// �� ������ �迭�� ������ �Ŀ� ������ ���� �Է��ϴ� ����� ���ؼ� �ϴ����� ���� �����̴�.


public class Problem_25 {
	public static void main(String[] args) {
		
		// [1] : �迭 ����
		int[] sales_table = new int[5];
		int leng_sales_table = sales_table.length;
		// [2] : ������ �迭 ������ �� �Է��ϱ�
		sales_table[0]=3;
		sales_table[1]=11;
		sales_table[2]=22;
		sales_table[3]=33;
		sales_table[4]=44;
		
		System.out.println(sales_table[0]);
		System.out.println(sales_table[1]);
		System.out.println(sales_table[2]);
		System.out.println(sales_table[3]);
		System.out.println(sales_table[4]);
		System.out.println(sales_table[leng_sales_table-1]);
	}
}

// [������]
//------------------------------------------------------------------
// 3
// 11
// 22
// 33
// 44 
// 44
