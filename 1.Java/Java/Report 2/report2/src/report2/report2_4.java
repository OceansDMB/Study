package report2;
import java.util.*;
public class report2_4 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("정수 10개 입력>>");
		int sort;
		int arr[] = new int[10];
		for (int i = 0; i < arr.length; i++) {
			arr[i] = sc.nextInt();
}
		for (int i = 0; i < arr.length; i++) {
			for (int j = i; j < arr.length; j++) {
				if(arr[i] > arr[j])
				{
				sort = arr[i];
				arr[i] = arr[j];
				arr[j] = sort;
}
}
}		
		for(int i : arr){
		System.out.print(i+" ");
		}
		sc.close();
	}
}

