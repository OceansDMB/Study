public class Problem_08{
	public static void main(String[] args) {
			int x,y,z;
			x=900;
			y=900;
			z=900;
			
			System.out.println("[4-2]: " +x+ "-"+y+"-"+z);
		//	[4-3]
			int x1=300,y1=400,z1=500;
			System.out.println("[4-3]: " +x1+ "-"+y1+"-"+z1);
			
		// [4-4] : 같은 값으로 초기화 
			String str1,str2,str3;
			str1=str2=str3="korea";
			System.out.println("[4-4] 여러 문자열 변수 한꺼번에 초기화: " + str1+" "+str2+" "+str3);
			
			int i,j,k;
			i=j=k=100;
			System.out.println("[4-4] 여러 정수형 변수 한꺼번에 초기화 : "+i+j+k );
			i = i-20;
			System.out.println(i);
			System.out.println(j);
	}
}