import java.util.*;

class Sungjuk{
		public static void member() {
		String name;
		int kor,eng,math,sum;
		float avg;
		Scanner scan = new Scanner(System.in);
		System.out.print("�̸� = ");
		name = scan.next();
		System.out.print("���� = ");
		kor=scan.nextInt();
		System.out.print("���� = ");
		eng=scan.nextInt();
		System.out.print("���� = ");
		math=scan.nextInt();
		sum = kor+eng+math;
		avg = sum/3f;
		System.out.println("name:"+name+"\ntot:"+sum+"\navg:"+String.format("%.5f",avg));
		scan.close();
		}
}	



public class Ex00{
	public static void main(String[] args) {
		Sungjuk.member();

	}
}