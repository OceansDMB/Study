import java.awt.*;

public class Problem_3 {
	public static void main(String[] args) {
		Frame f = new Frame("BorderLayoutTest");
		f.setSize(200,200);
		//Frame은 기본적으로 BorderLayout로 설정되어 있으므로 따로 설정하지 않아도 됨.
		f.setLayout(new BorderLayout());
		Button north = new Button("North");
		Button south = new Button("South");
		Button east = new Button("East");
		Button west  = new Button("West");
		Button center = new Button("Center");
		
		//Frame의 5개의 각 영역에 Button을 하나씩 추가한다.
		f.add(north, "North"); //f.add("North",north);와 같이 쓸수 있음
		f.add(south,"South");// 대소문자 철저히
		f.add(east,"East");  // East 대신, BorderLayout.EAST 사용가능
		f.add(west,"West");
		f.add(center,"Center");
			
		f.setVisible(true);
	}
}
