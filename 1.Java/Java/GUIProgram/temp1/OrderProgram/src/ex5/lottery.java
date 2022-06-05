package ex5;
import javax.swing.*;
import java.awt.event.*;
import java.util.ArrayList;
import java.awt.*;

public class lottery extends JFrame {
	
	lottery() {

		setTitle("�ζǹ�ȣ �����");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setSize(420, 300);  // Frame ũ�� ����
		setLayout(new BorderLayout(0, 5));
		makeElements();  // 
		setVisible(true);
	}
	
	void makeElements() {
		
		JPanel northPanel = new JPanel();
		JPanel southPanel = new JPanel();
		
		JTextArea text = new JTextArea();
		JScrollPane textPanel = new JScrollPane(text);
		
		JButton[] num = new JButton[6]; // 6���� �ζǹ�ȣ�� ��� ���� ����(��ư���) ����
		JPanel numPane = new JPanel();
		numPane.setLayout(new GridLayout(1, 6, 10, 0));
		for(int i = 0; i < num.length; i++) {
			num[i] = new JButton(" ");
			numPane.add(num[i]);
		}
		
		JButton btn = new JButton("�ζ� ��ȣ �����ϱ�");
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
				Integer temp = (int)(Math.random() * 45 + 1); // �ζǹ�ȣ�� �������� ����, �迭�� �ֱ�
				String element;
				if(temp < 10) {
					element = "0" + String.valueOf(temp); // ������ ���� 10 ������ ��, �տ� ���� 0�� �����ְ� ���.
				}
				else {
					element = String.valueOf(temp);
				}
				if(!lottoNum.contains(element)) {  // �ζǹ�ȣ�� ���� ���ڰ� ������ ��찡 �����Ƿ� ���� ���� ����� ��� ����.
					lottoNum.add(element);  // 
					i++;
				}
			}
			
			String message = "                                  ";  
			
			for(int j = 0; j < buttons.length; j++) {
				buttons[j].setText(lottoNum.get(j));
				message += lottoNum.get(j) + "       ";
			}
			
			textArea.append(message + "\n");  // ���������� �ٹٲ�.
			textArea.setCaretPosition(textArea.getDocument().getLength());
		}
		
	}

	public static void main(String[] args) {
		JFrame.setDefaultLookAndFeelDecorated(true);
		new lottery();
		
	}

}