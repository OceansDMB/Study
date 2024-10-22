
public class TypeConversion {
	public static void main(String[] args) {
		int i;
		double f;
		
		f= 5/4 ;
		System.out.println(f);
		// 피연산자가 정수값이므로 정수연산형으로 계산되어 1이 됨. 
		// 이것이 double 형 변수에 대입되므로 올림 변환이 발생하여 1.0이 f에 저장된다.
		f =(double) 5/4;
		System.out.println(f);
		// 여기서는 먼저 형변환 연산자가 우선순위가 높기 떄문에 먼저 실행되어서 정수 5가 부동소수점수 5.0으로 변환.
		//5.0/4 는 피연산자중 하나가 double형 이므로 4도 double 형으로 자동 형변환되고 5.0/4.0 으로 계산되어
		// 1.25가 수식의 결과값이 된다.
		
		i = (int) 1.3 + (int)1.8;
		System.out.println(i);
		// 수식(int)1.3 + (int) 1.8에서는 1.3과 1.8이 모두 1로 변환되므로 2로 저장.
		
	}
}
