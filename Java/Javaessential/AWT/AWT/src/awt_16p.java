import java.awt.*;

public class awt_16p {
	public static void main(String[] args) {
		Frame f= new Frame("Questions"); // â ���� Questions �� ������ f Frame ����
		f.setSize(305, 250); // f Frame ������ ����
		// Frame�� LauoutManager�� FlowLayout���� �����Ѵ�.
		f.setLayout(new FlowLayout());
		
		Label q1 = new Label("1. ����� ���� �оߴ�?(������ ���� ����)");
		Checkbox news = new Checkbox("News",true); // üũ�� true�� ���·� �����ϰڴ�. default : false �ε�.
		Checkbox sports = new Checkbox("sports",true); // Ȯ�ο� 
		Checkbox movies = new Checkbox("movies",false); // Ȯ�ο�2 
		Checkbox music = new Checkbox("music"); // ����Ʈ�� false����?
		
		f.add(q1); f.add(news); f.add(sports); f.add(movies); f.add(music); // ���� ��ü ȣ��.
		
		Label q2 = new Label("2. �󸶳� ���� ���忡 ���ʴϱ�?"); // �� ��° ���� 
		CheckboxGroup group1 = new CheckboxGroup();
		Checkbox movie1 = new Checkbox("�� �޿� �� �� ���ϴ�.",group1,true);
		Checkbox movie2 = new Checkbox("�� �޿� �� �� ���ϴ�.",group1,false);
		Checkbox movie3 = new Checkbox("�� �޿� �� �� ���ϴ�.",group1,false);
		
		f.add(q2); f.add(movie1); f.add(movie2); f.add(movie3);
		
		Label q3 = new Label("3. �Ϸ翡 �󸶳� ��ǻ�͸� ����Ͻʴϱ�?");
		CheckboxGroup group2 = new CheckboxGroup();
		Checkbox com1 = new Checkbox("5�ð� ����",group2,true);
		Checkbox com2 = new Checkbox("10�ð� ����",group2,false);
		Checkbox com3 = new Checkbox("15�ð� ����",group2,false);
		
		f.add(q3); f.add(com1); f.add(com2); f.add(com3);
		f.setVisible(true);
	}
}
