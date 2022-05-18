// 배열의 값들을 for 문과 같은 반복문을 사용하지 않고 한꺼번에 출력하는 코드를 작성하시오.
// 이 문제는 반복문이 아닌 메서드로 배여르이 요소 값들을 출력하는 방법에 대해서 아는지를 묻는 문제이다.


//[!] : Arrays.toString()메서드
// 반복문을 사용하지 않고 배열의 값을 출력하고자 한다면 Arrays 클래스의 toString()메서드를 사용하면 된다.
// toString() 인자로는 배열명을 넣어주면 된다.
// 사용을 위해서는 기본적으로 java.util.Arrays 임포트 선언이 되어져 있어야 한다.--> 이때도 세미콜론(;)까먹지 않도록 주의!

import java.util.Arrays;

public class Problem_29 {
	public static void main(String[] args) {
		
		// [1] : 배열선언
		int[] arr = {238,382,491,229,943,254,843};
		
		// [2] : toString() 메서드 사용하여 값 출력
		System.out.println(Arrays.toString(arr)); // [] 괄호의 형태로 배열 표시를 보여주면서 출력 됨.
		System.out.println(arr[0]); // 238
		
		// [3] : for 반복문 
		for(int i = 0; i < arr.length; i++) {
			System.out.print(arr[i]+" ");
		}
	}
}


/*	[결과출력]
  --------------------------------------------------------------------------
  [238,382,491,229,943,254,843]
  */
 