package Chapter6;
import java.util.Scanner;
import java.util.StringTokenizer;
public class P_4 {
	    public static void main(String[] args){
	        Scanner scanner = new Scanner(System.in);
	        String a = scanner.nextLine();
	        StringTokenizer st = new StringTokenizer(a, "+");
	        int n = st.countTokens();
	        int [] c = new int[n];
	        int sum = 0;
	        while(st.hasMoreTokens()){
	            for(int i=0; i<n; i++){
	                String token = st.nextToken();
	                String b = token.trim();
	                c[i] = Integer.parseInt(b);
	                sum += c[i];
	            }
	        }
	        System.out.print("гую╨  " + sum);
	        scanner.close();
	    }
	}
