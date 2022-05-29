import java.awt.*;

public class Problem_3 {
	public static void main(String[] args) {
		Frame f = new Frame("BorderLayoutTest");
		f.setSize(200,200);
		//Frame�� �⺻������ BorderLayout�� �����Ǿ� �����Ƿ� ���� �������� �ʾƵ� ��.
		f.setLayout(new BorderLayout());
		Button north = new Button("North");
		Button south = new Button("South");
		Button east = new Button("East");
		Button west  = new Button("West");
		Button center = new Button("Center");
		
		//Frame�� 5���� �� ������ Button�� �ϳ��� �߰��Ѵ�.
		f.add(north, "North"); //f.add("North",north);�� ���� ���� ����
		f.add(south,"South");// ��ҹ��� ö����
		f.add(east,"East");  // East ���, BorderLayout.EAST ��밡��
		f.add(west,"West");
		f.add(center,"Center");
			
		f.setVisible(true);
	}
}
