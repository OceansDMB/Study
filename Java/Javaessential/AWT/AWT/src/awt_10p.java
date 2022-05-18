// 사용자가 클릭 했을 때 어떤 작업이 수행되도록 할 때 사용하는 컴포넌트를 생성하기

import java.awt.*;
import java.awt.event.*;

public class awt_10p {
	public static void main(String[] args) {
		Frame f = new Frame("Login"); //창 이름 설정
		f.setSize(300,200); // 창크기값 설정
		f.setLayout(null); //레이아웃 매니저의 설정을 해제한다.
		
		Button b = new Button("확 인"); // 확인이라는 label 가진 Button 생성. label - Button위에 나타날 text
		b.setSize(100,50); // 버튼 크기 설정
		b.setLocation(100,75); //Frame내에서의 Button 위치 설정하기.
		// 좌상단으로부터 x,y 픽셀만큼 떨어지게 위치한다.
		
		f.add(b);
		f.setVisible(true);
	}
}
