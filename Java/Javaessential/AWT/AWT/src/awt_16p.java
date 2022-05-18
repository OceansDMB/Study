import java.awt.*;

public class awt_16p {
	public static void main(String[] args) {
		Frame f= new Frame("Questions"); // 창 제목 Questions 를 가지는 f Frame 설정
		f.setSize(305, 250); // f Frame 사이즈 설정
		// Frame의 LauoutManager를 FlowLayout으로 설정한다.
		f.setLayout(new FlowLayout());
		
		Label q1 = new Label("1. 당신의 관심 분야는?(여러개 선택 가능)");
		Checkbox news = new Checkbox("News",true); // 체크에 true인 상태로 생성하겠다. default : false 인듯.
		Checkbox sports = new Checkbox("sports",true); // 확인용 
		Checkbox movies = new Checkbox("movies",false); // 확인용2 
		Checkbox music = new Checkbox("music"); // 디폴트가 false인지?
		
		f.add(q1); f.add(news); f.add(sports); f.add(movies); f.add(music); // 생성 객체 호출.
		
		Label q2 = new Label("2. 얼마나 자주 극장에 가십니까?"); // 두 번째 질문 
		CheckboxGroup group1 = new CheckboxGroup();
		Checkbox movie1 = new Checkbox("한 달에 한 번 갑니다.",group1,true);
		Checkbox movie2 = new Checkbox("한 달에 한 번 갑니다.",group1,false);
		Checkbox movie3 = new Checkbox("한 달에 한 번 갑니다.",group1,false);
		
		f.add(q2); f.add(movie1); f.add(movie2); f.add(movie3);
		
		Label q3 = new Label("3. 하루에 얼마나 컴퓨터를 사용하십니까?");
		CheckboxGroup group2 = new CheckboxGroup();
		Checkbox com1 = new Checkbox("5시간 이하",group2,true);
		Checkbox com2 = new Checkbox("10시간 이하",group2,false);
		Checkbox com3 = new Checkbox("15시간 이하",group2,false);
		
		f.add(q3); f.add(com1); f.add(com2); f.add(com3);
		f.setVisible(true);
	}
}
