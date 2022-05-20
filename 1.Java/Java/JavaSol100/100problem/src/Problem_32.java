import java.util.Arrays;

// 1,2���� �迭�� ���� �� ����� �پ��� ������ �����غ��ÿ�.
// �� ������ �ڹ� �迭�� ���ؼ� 2���� �迭 ���ַ� ���� �� ����� �پ��ϰ� �غ��� ���չ����̴�.

public class Problem_32 {
	public static void main(String[] args) {
		
	// [1] : String 1���� �迭 --> 3���� ���ڿ��� ���� �� �ִ� �迭 �����ϱ�.
	// String Ÿ���� �������� 3���� �����ϱ� ���� ���� ���� --> �̶�, ������ ���� �� ��Ҵ� �⺻�� -->null�� �ʱ�ȭ.	
	String[] province = new String[3];
	System.out.println(province[0]); // ---null ���---;;
	System.out.println(province[1]);  
	System.out.println(province[2]); 
	
	// [2] : String �迭 �ʱ�ȭ --> �����Է�.
	province[0] = "������";
	province[1] = "���";
	province[2] = "����";
	
	System.out.println(province[0]);
	
	// [3] : String�迭 �ʱ�ȭ --> �迭 ���� �� ������ {}�� ���ÿ� �ʱ�ȭ.
	String[] nation = new String[] {"Kor","Eng","USA"};
	System.out.println(Arrays.toString(nation));
	
	
	String[] flower = {"������","���޷�","����ȭ"};
	// [4] : �ݺ����� ����Ͽ� �迭 �� ��� ��� 
	for(int i =0; i<flower.length; i++) {
		System.out.print(flower[i]);
	}
	System.out.println();
	
	// [5] : ���� for������ �迭 ��� ��� 
	for(String aaa:nation) {
		System.out.print(aaa);
	}
	System.out.println();
	
	// [6] : String 2���� �迭����� --> 2X3 Shape
	// �ƽþ� --> ���Ͼƽþ�(�ѱ�,�߱�,�Ϻ�), �����ƽþ�(�±�,��Ʈ��,�ʸ���)
	
	String[][] asia_nations = {
			{"�ѱ�","�߱�","�Ϻ�"},
			{"�±�","��Ʈ��","�ʸ���"}		
	};
	
	System.out.println(asia_nations[0]);// ---���Ͼƽþ� ������ �����ϰ� �ִ� 1���� �迭�� �ּҸ� �����ϴ°� ���---
	System.out.println(asia_nations[1]);
	
	System.out.println(asia_nations[0][0]); // ���� ��� ���
	System.out.println(asia_nations[1][2]); // ���� ��� ���
	
	System.out.println(asia_nations.length); //�迭�� �� ����.2 
	System.out.println(asia_nations[0].length); // �迭�� �� ����.3
	
	System.out.println(Arrays.toString(asia_nations[0]));
	System.out.println(Arrays.toString(asia_nations[1]));
	
	// [7] : �ݺ����� ����� String 2���� �迭�� �� ���
		for(int i=0; i<asia_nations.length;i++) {
			for(int j = 0; j<asia_nations[i].length;j++)
					System.out.print(asia_nations[i][j]+" ");
			System.out.println();
		}
	// [8] : charAt() �޼��� ��� --> �ش� �ε����� �ִ� ���� ��ȯ
	String[] strAr = {"Hong","Kim","Park"};
	System.out.println(strAr[0]); // hong
	System.out.println(strAr[0].charAt(2)); // n
	System.out.println(strAr[1].charAt(2)); // m
	System.out.println(strAr[2].charAt(2)); // r
	}
}

























