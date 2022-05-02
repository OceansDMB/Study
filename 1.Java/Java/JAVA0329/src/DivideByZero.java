import java.util.*;


public class DivideByZero {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int dividend; //나뉨수
		int divisor; //나눔수
		
		System.out.print("나뉨수를 입력하시요 : ");
		dividend = scanner.nextInt(); // 입력된 나뉨수를 dividend에 저장

		System.out.print("나눔수를 입력하시요 : ");
		divisor = scanner.nextInt(); // 입력된 나눔수를 divisor에 저장
		
		System.out.println(dividend + "를 " + divisor + " 로 나누면 몫은 " + 
		 dividend/divisor + "입니다.");
		scanner.close();
	}// 해당 상황에서 divisor를 0으로 입력할 경우 예외 발생함.
}
