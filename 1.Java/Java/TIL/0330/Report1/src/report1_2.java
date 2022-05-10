import java.util.*;


public class report1_2 {
	public static void main(String[] args) {
		/* 표준입력을 입력한 정수에서 각각의 자리에 해당하는 수를 반대로 출력하는
		   프로그램 작성하기.*/
		Scanner scanner = new Scanner(System.in);
		System.out.print("입력받은 정수의 각각의 자리에 해당하는 수를 반대로 출력하는 프로그램입니다. \n");
		System.out.print("몇 자리의 숫자를 입력하고 싶습니까?");
		try {
		int n = scanner.nextInt();
		System.out.println("반대로 출력하고 싶은 "+n +"자리의 수를 입력하세요.");
		System.out.println("(caution : 각각의 숫자는 띄어쓰거나 엔터키로 구분지어야 합니다!)");
		int[] integernum= new int[n];
		
		for (int i=0; i < integernum.length; i++) {
			integernum[i] = scanner.nextInt();
		
		if (integernum[i]>10) {
				System.out.println("기입 방식이 틀렸습니다.");
				System.out.println("각각의 숫자는 붙여서 작성할 수 없으며 반드시 한칸을 띄우거나 엔터키로 구분지어야 합니다.");
				break;
		}
		else {
			continue;
		}
		}
		for (int i=n-1; i >=0; i-- ) {
			System.out.print(integernum[i] + " ");
		}
		}
		catch(ArrayIndexOutOfBoundsException e) {
			System.out.println("기입하고자 하는 자리수보다 더 많은 숫자를 기입하였습니다.");
		}
		catch(InputMismatchException e) {
			System.out.println("해당 숫자는 정수가 아닙니다. 다시 실행하십시오.");
		}
		finally {
			System.out.println("\n프로그램을 종료합니다.");
		}
		scanner.close();
		}
}