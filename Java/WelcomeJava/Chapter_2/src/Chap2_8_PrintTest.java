
public class Chap2_8_PrintTest {
	public static void main(String[] args) {
		
		double value = 1.0/3.0;
		System.out.println(value);
		// 위 방식으로는 프린트 포맷을 변경 할 수 없음.
		System.out.printf("%6.2f",value);
		
		//형식지정자 
		// %d :정수를 출력한다.
		// ex) System.out.printf("%d",10);
		// %f :실수를 출력한다.
		// ex) System.out.printf("%f",3.14);
		// %c :문자를 표시한다.
		// ex) System.out.printf("%c",'a');
		// %s :문자열을 표시한다.
		// ex) System.out.printf("%s","Hello");
		
		// "%6.2f"의 의미는 다음과 같다.
		// 실수를 6개의 칸에 표시한다.
		// 소수점 이하는 2자리로 한다.
		}
}
