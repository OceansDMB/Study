import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

public class Problem_6 {
	public static void main(String[] args) {
		final Frame f = new Frame("CardLayoutTest");
		final CardLayout card = new CardLayout(10,10);
		f.setLayout(card);
		
		Panel card1 = new Panel();
		card1.setBackground(Color.LIGHT_GRAY);
		card1.add(new Label("Card 1"));
		Panel card2 = new Panel();
		card2.setBackground(Color.orange);
		card2.add(new Label("Card 2"));
		Panel card3 = new Panel();
		card3.setBackground(Color.cyan);
		card3.add(new Label("Card 3"));
		
		f.add(card1,"1"); // Frame에 각 카드에 맞는 숫자 붙이기
		f.add(card1,"2");
		f.add(card1,"3");
		
		class Handler extends MouseAdapter{
			public void mouseClicked(MouseEvent e) {
				if(e.getModifiers() == e.BUTTON3_MASK) {
					card.previous(f); // 이전 Panel 보여주기
				} else {
					card.next(f);	//다음 Panel 보여준다.
				}
			}
		}
		card1.addMouseListener(new Handler());
		card1.addMouseListener(new Handler());
		card1.addMouseListener(new Handler());
		
		f.setSize(200,200);
		f.setLocation(200,200);
		f.setVisible(true);
		card.show(f, "1");
	}
}
