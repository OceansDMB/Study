package app;
import util.Adder;

public class Main {
	public static void main(String[] args) {
		Adder adder = new Adder(2, 5);
		System.out.println(adder.add());
	}
}