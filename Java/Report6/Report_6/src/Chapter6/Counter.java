package Chapter6;
import java.util.Scanner;
import java.util.StringTokenizer;
public class Counter {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        while(true){
            String sen = scan.nextLine();
            if(sen.equals("exit")){
             System.out.print("종료합니다...");
                scan.close(); 
                break;
            }
            StringTokenizer st = new StringTokenizer(sen, " ");
            int n = st.countTokens();
            System.out.println("어절 개수는 " + n);
        }
    }
}
