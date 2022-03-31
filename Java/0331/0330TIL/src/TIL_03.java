
public class TIL_03 {
	public static void main(String[] args) {
		int i = 0, sum = 0;
		do {
			i = i+1;
			if(i%2==1)continue;
			sum +=i;
		} while(i<10);
		System.out.println(sum);
	}
	// do while 중 continue 이용하여 필요 없는 데이터 넘기기
}
