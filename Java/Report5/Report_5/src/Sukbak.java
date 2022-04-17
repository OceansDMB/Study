import java.io.*;
   
public class Sukbak {
    public static void main(String[] args) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int num = 0, tnum = 0;
        System.out.println("호텔의 전체 객실 수를 설정하세요");
        tnum = Integer.parseInt(in.readLine());
   
        int[] room = new int[tnum + 1]; // 배열 0번지를 제외시키기 위해 +1
        String[] name = new String[tnum + 1]; // 배열 0번지를 제외시키기 위해 +1
        boolean bool = true;
   
        for (int i = 1; i <= tnum; i++) { // 0호실을==>1호실로
            room[i] = i;
        } // room 번호 초기화
  
        while (bool) {
            System.out
                    .println("<<1.입실,성함입력 2.퇴실 3.전체현황 4.프로그램종료>>\n번호를 입력하세요");
            num = Integer.parseInt(in.readLine());
   
            switch (num) {
            case 1: // 호실, 이름입력
                do {
                    System.out.println("투숙할 호실을 선택하세요");
                    num = Integer.parseInt(in.readLine());
                } while (num < 1 || num > tnum);
                if (name[num] != null) {
                    do {
                        System.out.println("현재 투숙객이 있습니다. 다른 호실을 선택하세요");
                        num = Integer.parseInt(in.readLine());
                    } while (name[num] != null);
                }// end if
   
                System.out.println("투숙객 이름을 입력하세요");
                name[num] = in.readLine();
   
                bool = true;
                break;
            case 2: // 퇴실
                System.out.println("퇴실할 호실을 선택하세요");
                num = Integer.parseInt(in.readLine());
                name[num] = null;
                break;
            case 3: // 전체현황
                for (int i = 1; i <= tnum; i++) {
                    if (name[i] == null) {
                        System.out.println(room[i] + "호실이 비었습니다.");
                    } else
                        System.out.println(room[i] + "호실의 투숙객:" + name[i]
                                + "입니다.");
                }
                break;
            case 4: // 종료
                bool = false;
            }
        }// end while
   
    }
}