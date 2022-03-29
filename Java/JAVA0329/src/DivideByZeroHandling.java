import java.util.Scanner;


public class DivideByZeroHandling {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int dividend; //나뉨수
		int divisor; //나눔수
		
		while(true) {  // true 가 나올 때 까지 반복
		System.out.print("나뉨수를 입력하시요 : ");
		dividend = scanner.nextInt(); // 입력된 나뉨수를 dividend에 저장

		System.out.print("나눔수를 입력하시요 : ");
		divisor = scanner.nextInt(); // 입력된 나눔수를 divisor에 저장
		try {
		System.out.println(dividend + "를 " + divisor + " 로 나누면 몫은 " + 
		 dividend/divisor + "입니다.");
		break; // 정상적인 나누기 완료 후 while 벗어나기
		}
		catch(ArithmeticException e) {//ArithmeticException 예외 처리코드
			System.out.println("0으로 나눌 수 없습니다. 다시 입력하세요.");
		}
		}
		scanner.close();
}
}
