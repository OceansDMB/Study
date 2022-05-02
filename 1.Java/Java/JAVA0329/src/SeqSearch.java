import java.util.*;


public class SeqSearch {

	public static void main(String[] args) {
		int s[] = {0,10,20,30,40,50,60,70,80,90,100};
		int value,index = -1;
		
		Scanner scan = new Scanner(System.in);
		System.out.print("Write Number you want to find : ");
		value = scan.nextInt();
		
		for (int i = 0 ; i < s.length; i++) {
				System.out.print("i = "+i +" s[i]= " +s[i] + "\n");
				if (s[i] == value) {
					index = i;
					//break;
					// break 문을 걸면 해당 인자값을 찾은 이후 끝까지 돌지않고 반복구문 탈출함.
				}
		}
		if (index < s.length && index >= 0)
			System.out.println("" + value + " is " + index + " th placed.");
		scan.close();
	}
}
