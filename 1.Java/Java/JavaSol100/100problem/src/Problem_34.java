// 아래의 메서드 구현 코드에서 틀린 곳을 찾아 올바르게 수정하시오.
// 이 문제는 자바의 메서드 구현시 기본적인 주의점에 대해서 아는지를 묻는 문제이다.
// 클래스명.메서드명();

public class Problem_34 {
	public static void helloWorld() {
			System.out.println("Hello World");
	}
	public static void main(String[] args) {
		// static 메서드에서는 static 끼리만 호출이 가능 함.
			//[1] : 메서드 호출
			helloWorld();
	}
}
