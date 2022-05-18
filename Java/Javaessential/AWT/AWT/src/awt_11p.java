import java.awt.*;

public class awt_11p {
	public static void main(String[] args) {
	Frame f = new Frame("Choice-select");
	f.setSize(300,200);
	f.setLayout(null);
	
	Choice day = new Choice(); // Choice 객체 - 전형적인 슬라이드 클릭박스 형태의 block 생성
	day.add("SUN");  // 목록값 생성.
	day.add("MON");  day.add("TUE");
	day.add("WED");  day.add("THU");
	day.add("FRI");  day.add("SAT");
	
	day.setSize(100,50);
	day.setLocation(100,70);
	
	f.add(day);
	f.setVisible(true);
	
	}
}
