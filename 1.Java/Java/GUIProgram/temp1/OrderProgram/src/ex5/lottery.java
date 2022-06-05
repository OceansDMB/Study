package ex5;
import javax.swing.*;
import java.awt.event.*;
import java.util.ArrayList;
import java.awt.*;

public class lottery extends JFrame {
	
	lottery() {

		setTitle("로또번호 추출기");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setSize(420, 300);  // Frame 크기 지정
		setLayout(new BorderLayout(0, 5));
		makeElements();  // 
		setVisible(true);
	}
	
	void makeElements() {
		
		JPanel northPanel = new JPanel();
		JPanel southPanel = new JPanel();
		
		JTextArea text = new JTextArea();
		JScrollPane textPanel = new JScrollPane(text);
		
		JButton[] num = new JButton[6]; // 6개의 로또번호를 출력 해줄 공간(버튼모양) 생성
		JPanel numPane = new JPanel();
		numPane.setLayout(new GridLayout(1, 6, 10, 0));
		for(int i = 0; i < num.length; i++) {
			num[i] = new JButton(" ");
			numPane.add(num[i]);
		}
		
		JButton btn = new JButton("로또 번호 생성하기");
		btn.addActionListener(new MyActionListener(num, text));
		
		northPanel.add(numPane);
		southPanel.add(btn);
		
		add(textPanel, BorderLayout.CENTER);
		add(northPanel, BorderLayout.NORTH);
		add(southPanel, BorderLayout.SOUTH);
		
	}
	
	class MyActionListener implements ActionListener {
		
		JButton[] buttons;
		JTextArea textArea;
		
		MyActionListener(JButton[] buttons, JTextArea textArea) {
			this.buttons = buttons;
			this.textArea = textArea;
		}
		
		public void actionPerformed(ActionEvent e) {
			ArrayList<String> lottoNum = new ArrayList<>();
			
			int i = 0;
			while(i < 6) {
				Integer temp = (int)(Math.random() * 45 + 1); // 로또번호를 랜덤으로 생성, 배열에 넣기
				String element;
				if(temp < 10) {
					element = "0" + String.valueOf(temp); // 생성한 수가 10 이하일 때, 앞에 숫자 0을 보여주고 출력.
				}
				else {
					element = String.valueOf(temp);
				}
				if(!lottoNum.contains(element)) {  // 로또번호에 같은 숫자가 나오는 경우가 없으므로 같은 수가 추출될 경우 버림.
					lottoNum.add(element);  // 
					i++;
				}
			}
			
			String message = "                                  ";  
			
			for(int j = 0; j < buttons.length; j++) {
				buttons[j].setText(lottoNum.get(j));
				message += lottoNum.get(j) + "       ";
			}
			
			textArea.append(message + "\n");  // 누를떄마다 줄바꿈.
			textArea.setCaretPosition(textArea.getDocument().getLength());
		}
		
	}

	public static void main(String[] args) {
		JFrame.setDefaultLookAndFeelDecorated(true);
		new lottery();
		
	}

}