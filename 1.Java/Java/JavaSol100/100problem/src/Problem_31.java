import java.util.Arrays;

// 배열을 복사하는 메서드를 말해보고 관련된 예제 코드를 구현해보시오.
// 이 문제는 배열 복사시 사용하는 메서드명과 사용법에 대해서 알고 있는지를 묻는 문제이다.

// [!] : 배열 복사하기
// arrayscopy()메서드 사용 --> 
// 사용법 --> System.arraycoopy(원본배열명,원본배열을복사시작점(0~),복사배열명,붙일배열시작점(0~),길이);


public class Problem_31 {
	public static void main(String[] args) {
		
		//[1] : ar,ar2 배열선언
		
		int[] ar1 = {1,2,3,4,5};
		int[] ar2 = {1,2,3,4,5,6,7,8,9,10};
		
		//[2] : 배열 복사하기 -->System.arraycopy()
		System.arraycopy(ar1, 2, ar2, 5, 2);		
		System.out.println(Arrays.toString(ar1));//[1,2,3,4,5]
		System.out.println(Arrays.toString(ar2));//[1,2,3,4,3,4,5,8,9,10]
	}
}


// [결과 출력]
// ----------------------------------------------------------------------
// [1,2,3,4,5]
// [1,2,3,4,5,3,4,8,9,10]