
public class Problem_06 {
	public static void main(String[] args) {
		
		
		
		// byte,short,int,long,char
		//  1  ,  2  , 4 , 8  , 2
		System.out.println("[������]");
		System.out.println("------------------------------------------------------");
		System.out.println("Byte : " + Byte.BYTES +  "(����Ʈ) --> " + Byte.SIZE +"(��Ʈ)\t"+Byte.MIN_VALUE +" ~ " + Byte.MAX_VALUE  );  //--����Ʈ ��� --;;
		System.out.println("Short: " + Short.BYTES +  "(����Ʈ) --> " + Short.SIZE +"(��Ʈ)\t"+Short.MIN_VALUE +" ~ " +Short.MAX_VALUE  ); 
		System.out.println("int  : " + Integer.BYTES +  "(����Ʈ) --> " + Integer.SIZE +"(��Ʈ)\t"+Integer.MIN_VALUE +" ~ " +Integer.MAX_VALUE  );
		System.out.println("Long : " + Long.BYTES +  "(����Ʈ) --> " + Long.SIZE +"(��Ʈ)\t"+Long.MIN_VALUE +" ~ " +Long.MAX_VALUE  ); 
		System.out.println("Char: " + Character.BYTES +  "(����Ʈ) --> " + Character.SIZE +"(��Ʈ)\t"+Character.MIN_VALUE +" ~ " +Character.MAX_VALUE  );
		System.out.println("Char: " + Character.BYTES +  "(����Ʈ) --> " + Character.SIZE +"(��Ʈ)\t"+(int)Character.MIN_VALUE +" ~ " +(int)Character.MAX_VALUE  );
		
	}

}
/*	�ڹ��� Primitive Data Type�� ����Ʈ ũ��� ��Ʈ ũ�⸦ ����ϴ� �ڵ带 �����Ͻÿ�.
 	������ Ÿ�԰� ������ Ÿ�Կ� ���ؼ��� �����Ѵ�.
 	�̶�, �� Ÿ���� �ִ񰪰� �ּڰ��� ���� ���Ͽ� ����Ͻÿ�.
 	�Ʒ� ������� �������� �ִ�,�ּڰ��� ����� ����� �ȵǾ��µ�, �� ������ �����ϰ� �����غ��ÿ�.
 	ĳ���� Ÿ���� ������ �������� ����. 
 	
 	
 	[������]
 	--------------------------------------------------------------------------------
 	byte   :1(����Ʈ) --> 8(��Ʈ)             -128 ~ 127
 	short  :2(����Ʈ) --> 8(��Ʈ)			   -32768 ~32767
 	int    :4(����Ʈ) --> 32(��Ʈ)            -2147483648 ~ 2147483647
 	long   :8(����Ʈ) --> 64(��Ʈ)			   -9223372036854775808 ~ 9223372036854775807
 	char   :2(����Ʈ) --> 16(��Ʈ)             ~?
 	char   :2(����Ʈ) --> 16(��Ʈ)            0~65535
 
 */