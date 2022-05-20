import java.util.Arrays;

// 1,2차원 배열의 생성 및 출력을 다양한 예제로 구현해보시오.
// 이 문제는 자바 배열에 관해서 2차원 배열 위주로 생성 및 출력을 다양하게 해보는 종합문제이다.

public class Problem_32 {
	public static void main(String[] args) {
		
	// [1] : String 1차원 배열 --> 3개의 문자열을 담을 수 있는 배열 생성하기.
	// String 타입의 참조변수 3개를 저장하기 위한 공간 생성 --> 이때, 참조형 변수 각 요소는 기본값 -->null로 초기화.	
	String[] province = new String[3];
	System.out.println(province[0]); // ---null 출력---;;
	System.out.println(province[1]);  
	System.out.println(province[2]); 
	
	// [2] : String 배열 초기화 --> 직접입력.
	province[0] = "강원도";
	province[1] = "경상도";
	province[2] = "전라도";
	
	System.out.println(province[0]);
	
	// [3] : String배열 초기화 --> 배열 선언 및 생성시 {}로 동시에 초기화.
	String[] nation = new String[] {"Kor","Eng","USA"};
	System.out.println(Arrays.toString(nation));
	
	
	String[] flower = {"개나리","진달래","무궁화"};
	// [4] : 반복문을 사용하여 배열 값 모두 출력 
	for(int i =0; i<flower.length; i++) {
		System.out.print(flower[i]);
	}
	System.out.println();
	
	// [5] : 향상된 for문으로 배열 요소 출력 
	for(String aaa:nation) {
		System.out.print(aaa);
	}
	System.out.println();
	
	// [6] : String 2차원 배열만들기 --> 2X3 Shape
	// 아시아 --> 동북아시아(한국,중국,일본), 동남아시아(태국,베트남,필리핀)
	
	String[][] asia_nations = {
			{"한국","중국","일본"},
			{"태국","베트남","필리핀"}		
	};
	
	System.out.println(asia_nations[0]);// ---동북아시아 국가를 저장하고 있는 1차원 배열의 주소를 참조하는값 출력---
	System.out.println(asia_nations[1]);
	
	System.out.println(asia_nations[0][0]); // 실제 요소 출력
	System.out.println(asia_nations[1][2]); // 실제 요소 출력
	
	System.out.println(asia_nations.length); //배열의 열 갯수.2 
	System.out.println(asia_nations[0].length); // 배열의 행 갯수.3
	
	System.out.println(Arrays.toString(asia_nations[0]));
	System.out.println(Arrays.toString(asia_nations[1]));
	
	// [7] : 반복문을 사용한 String 2차원 배열의 값 출력
		for(int i=0; i<asia_nations.length;i++) {
			for(int j = 0; j<asia_nations[i].length;j++)
					System.out.print(asia_nations[i][j]+" ");
			System.out.println();
		}
	// [8] : charAt() 메서드 사용 --> 해당 인덱스에 있는 값을 반환
	String[] strAr = {"Hong","Kim","Park"};
	System.out.println(strAr[0]); // hong
	System.out.println(strAr[0].charAt(2)); // n
	System.out.println(strAr[1].charAt(2)); // m
	System.out.println(strAr[2].charAt(2)); // r
	}
}

























