package Chapter6;
import java.util.Scanner;
public class P_6 {
	  public static void main(String[] args)
	    {
	        Scanner scanner = new Scanner(System.in);
	        String []rps = {"����", "����", "��"};
	        while(true)
	        {
	            System.out.println("����(1), ����(2), ��(3), ������(4)>>");
	            int i = scanner.nextInt() - 1;
	            int ran = (int)(Math.random()*3);	            
	            if(i >= 3){
	                System.exit(0);
	                break;
	            }	        
	            System.out.println("����� " + rps[i] + " : " + "��ǻ�� " + rps[ran]);
	            if((i + 2) % 3 == ran)
	                System.out.println("����ڰ� �̰���ϴ�.");
	            else if(i == ran)
	                System.out.println("�����ϴ�.");
	            else
	                System.out.println("��ǻ�Ͱ� �̰���ϴ�.");
	        }        
	        scanner.close();
	    }
}
