import java.util.Scanner;


public class AverageProgram {
	
	public static void main(String[] args) {
	
	final int STUDENTS = 5;
	int total = 0;
	Scanner scan = new Scanner(System.in);
	
	int[] scores = new int[STUDENTS];
	
	for(int i = 0 ; i < scores.length; i++) {
		System.out.print("Type your score:");
		scores[i] = scan.nextInt();
	}
	
	for(int i = 0; i<scores.length; i++)
		total += scores[i];
	
	System.out.println("average score is " + total /STUDENTS + ".");
	}
}