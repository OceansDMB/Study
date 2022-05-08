package Chapter6;
import java.util.Scanner;
public class P_6 {
	  public static void main(String[] args)
	    {
	        Scanner scanner = new Scanner(System.in);
	        String []rps = {"가위", "바위", "보"};
	        while(true)
	        {
	            System.out.println("가위(1), 바위(2), 보(3), 끝내기(4)>>");
	            int i = scanner.nextInt() - 1;
	            int ran = (int)(Math.random()*3);	            
	            if(i >= 3){
	                System.exit(0);
	                break;
	            }	        
	            System.out.println("사용자 " + rps[i] + " : " + "컴퓨터 " + rps[ran]);
	            if((i + 2) % 3 == ran)
	                System.out.println("사용자가 이겼습니다.");
	            else if(i == ran)
	                System.out.println("비겼습니다.");
	            else
	                System.out.println("컴퓨터가 이겼습니다.");
	        }        
	        scanner.close();
	    }
}
