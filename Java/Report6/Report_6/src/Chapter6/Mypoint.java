package Chapter6;

public class Mypoint {
	int x,y;
	Mypoint(int x, int y) {
		this.x = x; 
		this.y = y;
	}
	public String toString() { 
		return getClass().getName() + "(" + x + "," + y+ ")";
	}
	public static void main(String [] args) {
		Mypoint a = new Mypoint(3,20);
		System.out.println(a);
	}
}
