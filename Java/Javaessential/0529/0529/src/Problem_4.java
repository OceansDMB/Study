import java.awt.*;

public class Problem_4 {
	public static void main(String[] args) {
		Frame f = new Frame("FlowLayoutTest");
		f.setSize(250,100);
		f.setLayout(new FlowLayout(FlowLayout.LEFT));
		f.add(new Button("ù ��°"));
		f.add(new Button("�� ��°"));
		f.add(new Button("�� ��°"));
		f.add(new Button("�� ��°"));
		f.add(new Button("�ټ� ��°"));
		f.setVisible(true);
	}
}
