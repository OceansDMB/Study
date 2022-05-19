import java.awt.*;


public class awt_20p {
	public static void main(String[] args) {
		Frame f = new Frame("Comments");
		f.setSize(400, 220);
		f.setLayout(new FlowLayout());
		
		TextArea comments = new TextArea("하고 싶은 말을 적으세요.",10,50);
		//10,50은 설정할 행,열 크기 10줄,50칸의 박스 생성
		
		f.add(comments);
		comments.selectAll();// TextArea의 text 전체 드래그 선택으로 변경.
		f.setVisible(true);
	}
}
