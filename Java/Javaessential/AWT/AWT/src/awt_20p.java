import java.awt.*;


public class awt_20p {
	public static void main(String[] args) {
		Frame f = new Frame("Comments");
		f.setSize(400, 220);
		f.setLayout(new FlowLayout());
		
		TextArea comments = new TextArea("�ϰ� ���� ���� ��������.",10,50);
		//10,50�� ������ ��,�� ũ�� 10��,50ĭ�� �ڽ� ����
		
		f.add(comments);
		comments.selectAll();// TextArea�� text ��ü �巡�� �������� ����.
		f.setVisible(true);
	}
}
