
public class Problem_06 {
	public static void main(String[] args) {
		
		
		
		// byte,short,int,long,char
		//  1  ,  2  , 4 , 8  , 2
		System.out.println("[결과출력]");
		System.out.println("------------------------------------------------------");
		System.out.println("Byte : " + Byte.BYTES +  "(바이트) --> " + Byte.SIZE +"(비트)\t"+Byte.MIN_VALUE +" ~ " + Byte.MAX_VALUE  );  //--바이트 계산 --;;
		System.out.println("Short: " + Short.BYTES +  "(바이트) --> " + Short.SIZE +"(비트)\t"+Short.MIN_VALUE +" ~ " +Short.MAX_VALUE  ); 
		System.out.println("int  : " + Integer.BYTES +  "(바이트) --> " + Integer.SIZE +"(비트)\t"+Integer.MIN_VALUE +" ~ " +Integer.MAX_VALUE  );
		System.out.println("Long : " + Long.BYTES +  "(바이트) --> " + Long.SIZE +"(비트)\t"+Long.MIN_VALUE +" ~ " +Long.MAX_VALUE  ); 
		System.out.println("Char: " + Character.BYTES +  "(바이트) --> " + Character.SIZE +"(비트)\t"+Character.MIN_VALUE +" ~ " +Character.MAX_VALUE  );
		System.out.println("Char: " + Character.BYTES +  "(바이트) --> " + Character.SIZE +"(비트)\t"+(int)Character.MIN_VALUE +" ~ " +(int)Character.MAX_VALUE  );
		
	}

}
/*	자바의 Primitive Data Type의 바이트 크기와 비트 크기를 출력하는 코드를 구현하시오.
 	정수형 타입과 문자형 타입에 대해서만 구현한다.
 	이때, 각 타입의 최댓값과 최솟값도 같이 구하여 출력하시오.
 	아래 결과에서 문자형의 최댓값,최솟값이 제대로 출력이 안되었는데, 그 이유를 설명하고 수정해보시오.
 	캐릭터 타입은 음수가 존재하지 않음. 
 	
 	
 	[결과출력]
 	--------------------------------------------------------------------------------
 	byte   :1(바이트) --> 8(비트)             -128 ~ 127
 	short  :2(바이트) --> 8(비트)			   -32768 ~32767
 	int    :4(바이트) --> 32(비트)            -2147483648 ~ 2147483647
 	long   :8(바이트) --> 64(비트)			   -9223372036854775808 ~ 9223372036854775807
 	char   :2(바이트) --> 16(비트)             ~?
 	char   :2(바이트) --> 16(비트)            0~65535
 
 */