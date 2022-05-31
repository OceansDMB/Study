package ex5;

import java.awt.Color;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class Main {   
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("[GUI - JButton과 JLabel 사용해 버튼 클릭 시 카운트 증가 실시]");
		
		/*[설 명]
		 * 1. 자바에서는 JFrame을 사용해서 GUI 프로그램을 만들 수 있습니다
		 * 2. JButton : 버튼 객체를 생성합니다 
		 * 3. JLabel : 라벨 객체 (텍스트 박스) 를 생성합니다
		 * 4. 로직 : 부모 프레임 생성 및 설정 > 자식 컴포넌트 생성 및 설정 > 자식 컴포넌트 이벤트 정의 > 부모 프레임에 자식 컴포넌트 추가
		 * */
		
		//TODO 부모 프레임 생성
		JFrame frm = new JFrame("버튼 클릭 카운트");
 
		//TODO 부모 프레임 크기 설정 (가로, 세로)
		frm.setSize(350, 300);
 
		//TODO 부모 프레임을 화면 가운데에 배치
		frm.setLocationRelativeTo(null);
 
		//TODO 부모 프레임을 닫았을 때 메모리에서 제거되도록 설정
		frm.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
 
		//TODO 부모 레이아웃 설정
		frm.getContentPane().setLayout(null);
 
		//TODO 자식 컴포넌트 생성
		JButton btn1 = new JButton("시작");
		JButton btn2 = new JButton("종료");
		JLabel txt1=new JLabel("0");        
 
		//TODO 자식 컴포넌트  버튼 위치와 크기 설정
		btn1.setBounds(30, 170, 122, 30); //setBounds(가로위치, 세로위치, 가로길이, 세로길이);
		btn2.setBounds(182, 170, 122, 30); //setBounds(가로위치, 세로위치, 가로길이, 세로길이);
		txt1.setBounds(120, 50, 90, 50); //setBounds(가로위치, 세로위치, 가로길이, 세로길이);
		txt1.setHorizontalAlignment(JLabel.CENTER); //텍스트 센터 표시 설정
        
		//TODO 자식 컴포넌트 이벤트 정의
		ActionListener btn1_action = new ActionListener(){			
			@Override
			public void actionPerformed(ActionEvent e) {
				// TODO Auto-generated method stub	
				int count = Integer.parseInt(txt1.getText());
				count += 1;
				txt1.setText(String.valueOf(count));				
			}
		};
		btn1.addActionListener(btn1_action);
		
		ActionListener btn2_action = new ActionListener(){			
			@Override
			public void actionPerformed(ActionEvent e) {
				// TODO Auto-generated method stub			
				txt1.setText("0");				
			}
		};
		btn2.addActionListener(btn2_action);
 
		//TODO 부모 프레임에다가 자식 컴포넌트 추가
		frm.getContentPane().add(btn1);
		frm.getContentPane().add(btn2);
		frm.getContentPane().add(txt1);
 
		//TODO 부모 프레임이 보이도록 설정
		frm.setVisible(true);
		
	}//메인 종료
}//클래스 종료