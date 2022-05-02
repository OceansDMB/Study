import java.util.*;

public class Rectangle {
	int width;
	int height;
	
	public int getArea(){
		return width*height;
	}
	
	
	public static void main(String[] args) {
		Rectangle rect = new Rectangle();// 객체 생성
		Scanner scanner = new Scanner(System.in);
		System.out.println(">>");
		
		rect.width  = scanner.nextInt();
		rect.height = scanner.nextInt();
	
		System.out.println("사각형의 면적은 " + rect.getArea());
		scanner.close();
	}
}
