import java.util.*;

public class TIL0404_01 {
	public static void main(String[] args) {
		Television tv = new Television();
		tv.channel = 7;
		tv.volume = 9;
		tv.onOff = true;
		int ch = tv.getChannel();
		System.out.println("���� ü���� " + ch +"�Դϴ�.");
/*		tv.print();
		Television yourTv = new Television();
		yourTv.channel = 9;
		yourTv.volume=12;
		yourTv.onOff= true;
		yourTv.print(); */
	}
}
