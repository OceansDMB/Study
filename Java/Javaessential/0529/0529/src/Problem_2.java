import java.awt.*;
import java.awt.event.*;

public class Problem_2 {
	public static void main(String args[]) {
		final Frame f = new Frame("PopupMenu Test");
		f.setSize(300,200);
		
	final PopupMenu pMenu = new PopupMenu("Edit");
		MenuItem miCut = new MenuItem("Cut");
		MenuItem miCopy = new MenuItem("Copy");
		MenuItem miPaste = new MenuItem("Paste");
		pMenu.add(miCut);	//PopupMenu에 MenuItem들을 추가한다.
		pMenu.add(miCopy);
		pMenu.add(miPaste);
		
	f.add(pMenu);	//PopupMenu를 Frame에 추가한다.
	f.addMouseListener(new MouseAdapter() {
		public void mousePressed(MouseEvent me) {
			// 오른쪽 마우스 버튼을 누르면 PopupMenu를 화면에 보여준다.
			if(me.getModifiers() == me.BUTTON3_MASK)
					pMenu.show(f, me.getX(),me.getY());
		}
	});
	f.setVisible(true);
	}
}
