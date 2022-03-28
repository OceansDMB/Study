import java.util.Scanner;

public class trial {

	public static void main(String[] args) {
	Scanner scan = new Scanner(System.in);
	String name,address;
	int age;
	double weight;
	
	name = scan.next();
	address =scan.next();
	age = scan.nextInt();
	weight = scan.nextDouble();
	
	System.out.println(name + address + age + weight);
	
	scan.close();

	}

}
