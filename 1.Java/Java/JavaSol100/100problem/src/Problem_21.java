// 알파벳 26개 문자를 대문자로 출력하는 반복문을 구현하시오.
// 이 문제는 알파벳 문자중 대문자 아스키 코드에 대해서 알고 반복문으로 출력할 수 있는지를 묻는 문제이다.


public class Problem_21 {
	public static void main(String[] args) {
		// for반복문-->A(65)~Z
		for(int a=65; a <= 90; a++) {
			
		System.out.print((char)a+" ");
		}

	}
}
