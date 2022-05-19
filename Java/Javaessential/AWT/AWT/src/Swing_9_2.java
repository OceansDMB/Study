import javax.swing.*;
import java.awt.*;

public class Swing_9_2 extends JFrame {
	public Swing_9_2() {
		setTitle("ContentPane°ú JFrame");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	
	Container contentPane = getContentPane();
	contentPane.setBackground(Color.ORANGE);
	contentPane.setLayout(new FlowLayout());
	
	contentPane.add(new JButton("OK"));
	contentPane.add(new JButton("Cancel"));
	contentPane.add(new JButton("Ignore"));

	setSize(300,150);
	setVisible(true);
	}
	
	public static void main(String[] args) {
		new Swing_9_2();
	}
}
