import java.util.*;


public class ThearterReserve {

	public static void main(String[] args) {
		final int size = 10;
		int[] seats = new int[size];
		
		while (true) {
			System.out.println("-----------------");
			for (int i = 0 ; i < size; i++)
				System.out.print(i+1+" ");
			System.out.println("\n-----------------");
			for (int i = 0; i < size; i++)
				System.out.print(seats[i] + " ");
			System.out.println("\n-----------------");
			System.out.print("Select seat you want. Exit : -1 ");
			Scanner scan = new Scanner(System.in);
			int s = scan.nextInt();
			if (s == -1)
				break;
			if (seats[s-1] == 0 ) {
				seats[s-1] = 1;
				System.out.println("Booked.");
			}
			else {
				System.out.println("That Seat is already Booked. \n Try another seat.");
				scan.close();
}
}
}
}
