import java.awt.*;

public class awt_11p {
	public static void main(String[] args) {
	Frame f = new Frame("Choice-select");
	f.setSize(300,200);
	f.setLayout(null);
	
	Choice day = new Choice(); // Choice ��ü - �������� �����̵� Ŭ���ڽ� ������ block ����
	day.add("SUN");  // ��ϰ� ����.
	day.add("MON");  day.add("TUE");
	day.add("WED");  day.add("THU");
	day.add("FRI");  day.add("SAT");
	
	day.setSize(100,50);
	day.setLocation(100,70);
	
	f.add(day);
	f.setVisible(true);
	
	}
}
