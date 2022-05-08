import java.util.StringTokenizer;

public class temp {
	public static void main(String[] args) {
	StringTokenizer st = new StringTokenizer("2+3+4+6", "+");
	int n = st.countTokens();
	System.out.println("ÅäÅ« °¹¼ö = " + n);
	while(st.hasMoreTokens()) {
	    System.out.print(st.nextToken()+ " ");
	}
	}
}
