import java.awt.*;

public class awt_25p {
	public static void main(String[] args) {
		Frame f = new Frame("Parent"); // �θ� â ��ü ����
		f.setSize(300, 200); // �θ� â ũ�� ����
		// parent Frame�� f�� �ϰ�, modal�� true�� �ؼ� �ʼ����� Dialog�� ��.
		Dialog info = new Dialog(f,"Information",true);
		// Dialog(a,b,c) 
		// a = ���ӵ� �θ�������(��ü) 
		// b = ������ ������ ��
		// c = boolean type���� Dialog modal �÷��� �Ұ�����? ����Ʈ���� false��. 
		// ����Ʈ���� false��. 
		info.setSize(140, 90);
		info.setLocation(50,50);		
		info.setLayout(new FlowLayout());
		
		Label msg = new Label("This is modal dialog",Label.CENTER);
		Button ok = new Button("OK");
		info.add(msg); info.add(ok);
		
		f.setVisible(true);
		info.setVisible(true);
		}
}
