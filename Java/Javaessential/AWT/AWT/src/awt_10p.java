// ����ڰ� Ŭ�� ���� �� � �۾��� ����ǵ��� �� �� ����ϴ� ������Ʈ�� �����ϱ�

import java.awt.*;
import java.awt.event.*;

public class awt_10p {
	public static void main(String[] args) {
		Frame f = new Frame("Login"); //â �̸� ����
		f.setSize(300,200); // âũ�Ⱚ ����
		f.setLayout(null); //���̾ƿ� �Ŵ����� ������ �����Ѵ�.
		
		Button b = new Button("Ȯ ��"); // Ȯ���̶�� label ���� Button ����. label - Button���� ��Ÿ�� text
		b.setSize(100,50); // ��ư ũ�� ����
		b.setLocation(100,75); //Frame�������� Button ��ġ �����ϱ�.
		// �»�����κ��� x,y �ȼ���ŭ �������� ��ġ�Ѵ�.
		
		f.add(b);
		f.setVisible(true);
	}
}
