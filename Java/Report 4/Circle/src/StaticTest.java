class Circle{
	private int radius;
	public Circle(int radius) {this.radius = radius;}
	public int getRadius() {return this.radius;}
	public void setRadius(int radius) {this.radius = radius;}
}
class CircleManager { // static 메소드만 가진다.
	static void copy(Circle src, Circle dest) {// src를 dest에 복사한다.
		dest.setRadius(src.getRadius());}
	static boolean equals(Circle a, Circle b) {
		if (a.getRadius() == b.getRadius()){return true;}
		else {return false;}
}
public class StaticTest{
	public static void main(String[] args) {
		Circle pizza = new Circle(5);//반지름 5 원 생성
		Circle waffle = new Circle(1);//반지름 1 원 생성
		boolean res = CircleManager.equals(pizza, waffle);//크기 비교 함
		if(res == true) {
			System.out.println("pizza와 waffle 크기 값음");
		}
		else {
			System.out.println("pizza와 waffle 크기 다름");
		}// 크기 다르므로 다르다는 결과값 나옴
		CircleManager.copy(pizza, waffle);
		res = CircleManager.equals(pizza, waffle);//pizza의 크기를 waffle에 넣었으므로 같다고 출력
		if(res == true) {
			System.out.println("pizza와 waffle 크기 값음");
		}
		else {
			System.out.println("pizza와 waffle 크기 다름");			
		}
	}
}
}
