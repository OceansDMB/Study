import java.io.*;
/*   
public class Sukbak {
    public static void main(String[] args) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int selnum = 0,selflo=0, hnum = 0, vnum = 0;
        System.out.println("���� �Է�");
        hnum = Integer.parseInt(in.readLine());
        vnum = Integer.parseInt(in.readLine());
   
        int[][] room = new int[hnum][vnum]; // �迭 0������ ���ܽ�Ű�� ���� +1
        String[][] name = new String[hnum][vnum]; // �迭 0������ ���ܽ�Ű�� ���� +1
        boolean bool = true;
   
        for (int i = 1; i <= hnum; i++) { // 0ȣ����==>1ȣ�Ƿ�
            for (int j = 0 ; j <= vnum; j++) {
            	room[i][j] = i*j;	
            }
        } // room ��ȣ �ʱ�ȭ


        while (bool) {
            System.out
                    .println("<<1.���� 2.��� 3.��ü���� 4.����=");
            selnum = Integer.parseInt(in.readLine());
   
            switch (selnum) {
            case 1: // ȣ��, �̸��Է�
                do {
                    System.out.println("���� �Է�");
                    selflo = Integer.parseInt(in.readLine());
                } while (selflo < 1 || selflo > vnum);
                do {
                	System.out.println("ȣ�� �Է�");
                	selnum = Integer.parseInt(in.readLine());
                };
                if (name[selnum] != null) {
                    do {
                        System.out.println("���� �������� �ֽ��ϴ�. �ٸ� ȣ���� �����ϼ���");
                        selnum = Integer.parseInt(in.readLine());
                    } 
                    while (name[selnum] != null);
                }// end if
   
                System.out.println("������ �̸��� �Է��ϼ���");
                name[selnum] = Integer.parseInt(in.readLine());
   
                bool = true;
                break;
            case 2: // ���
                System.out.println("����� ȣ���� �����ϼ���");
                num = Integer.parseInt(in.readLine());
                name[num] = null;
                break;
            case 3: // ��ü��Ȳ
                for (int i = 1; i <= hnum; i++) {
                    if (name[i] == null) {
                        System.out.println(room[i] + "ȣ���� ������ϴ�.");
                    } else
                        System.out.println(room[i] + "ȣ���� ������:" + name[i]
                                + "�Դϴ�.");
                }
                break;
            case 4: // ����
                bool = false;
            }
        }// end while
   
    }
}
        */