import java.util.Arrays;

// 다음 중 다중 배열의 선언으로 맞는 것을 골라보시오.
// 이 문제는 배열 선언을 여러 개 해야 하는 경우 한줄에 모두 선언하고 만들 수 있는지를 묻는 문제이다.

public class Problem_30 {
	public static void main(String[] args) {
	
	
	// [1]
	int[] a,b,c;
	
	// [2]
	int d[],e[],f[];
	
	// [3]
	int g[],h,i;
	
	a = new int[3];
	b = new int[3];
	c = new int[3];
// 	h = new int[3]; // error
	h = 10;
	
	System.out.println(Arrays.toString(a));
	System.out.println(Arrays.toString(b));
	System.out.println(Arrays.toString(c));
	
	d = new int[6];
	e = new int[6];
	f = new int[6];
		
	System.out.println(Arrays.toString(d));
	System.out.println(Arrays.toString(e));
	System.out.println(Arrays.toString(f));
	
	g= new int[9];
//	h= new int[9]; //error
	System.out.println(Arrays.toString(g));
	
	}
}


// [1]
// int[] a,b,c;

// [2]
// int d[],e[],f[];

// [3]
// int g[],h,i;




















