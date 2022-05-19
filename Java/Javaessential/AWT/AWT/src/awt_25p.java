import java.awt.*;

public class awt_25p {
	public static void main(String[] args) {
		Frame f = new Frame("Parent"); // 부모 창 객체 생성
		f.setSize(300, 200); // 부모 창 크기 설정
		// parent Frame을 f로 하고, modal을 true로 해서 필수응답 Dialog로 함.
		Dialog info = new Dialog(f,"Information",true);
		// Dialog(a,b,c) 
		// a = 종속될 부모프레임(객체) 
		// b = 설정한 프레임 명
		// c = boolean type으로 Dialog modal 플로팅 할것인지? 디폴트값은 false임. 
		// 디폴트값은 false임. 
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
