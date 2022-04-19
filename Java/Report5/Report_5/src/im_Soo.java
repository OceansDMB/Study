import java.util.*;


public class im_Soo {
    // ����
    // ��������� �ڵ� �ʱ�ȭ�� �˴ϴ�,
    int[] com = new int[3];
    int[] user = new int[3];
    int s, b; // �ʱ�ȭ s=0, b=0
 
    // ���� �߻� => int[] com
    void random() {
        int su = 0;
        boolean bCheck = false; // ���������� �ڵ����� �ʱ�ȭX �ݵ�� �ʱ�ȭ��Ų��.
        for (int i = 0; i < 3; i++) {
            bCheck = true;
            while (bCheck) {
                su = (int) (Math.random() * 9) + 1; // 1~9
                bCheck = false; // while �� ���Ḧ Ȯ��
                 for (int j = 0; j < i; j++) {
                    if (com[j] == su) {
                        bCheck = true;
                        break;
                    }
                }
            }
            com[i] = su;
        }
    } 
    void userInput() {
        Scanner scan = new Scanner(System.in); 
      while (true) {
            System.out.print("���� ���� ���������� �Է� = ");
            int input = scan.nextInt();
             if (input < 100 || input > 999) {
                System.out.println("���ڸ� ������ ��� �����մϴ�.");
                continue; // while => ó������ �̵�
            }
            user[0] = input / 100; // 789/100 = 7
            user[1] = (input % 100) / 10; // 789 % 100 = 89 / 10 = 8
            user[2] = input % 10; // 789%10 = 9
            if (user[0] == user[1] || user[1] == user[2] || user[2] == user[0]) {
                System.out.println("�ߺ��� ���� ����� �� �����ϴ�.");
                continue;
            }
 
            // 3. 0�� ����� �� ����.
            if (user[0] == 0 || user[1] == 0 || user[2] == 0) {
                System.out.println("0�� ����� �� ���� �����Դϴ�.");
                continue;
            }
            // while ����
            break;
        }
 
    }
 
    // �� => int[] com , int[] user
    void compare() {
 
        s = 0;
        b = 0;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (com[i] == user[j])// ���� �����̰�
                {
                    if (i == j) // �ű⿡ ���� �ڸ���
                    {
                        s++;
                    } else {
                        b++;
                    }
                }
            }
        }
    }
 
    // ��Ʈ => int[] user, s, b
    void hint() {
        System.out.printf("%dstrike, %dball!\n", s, b);
 
    }
 
    // ���� => s(3)
    boolean isEnd() {
        if (s == 3)
            return true;// �޼ҵ�� return�� ������ ����
        return false;
    }
 
    void process() {
        random();
        while (true) {
            // ����� ���� �Է�
            userInput();
            compare();
            hint();
 
            if (isEnd() == true) {
                Scanner scan = new Scanner(System.in);
                System.out.print("�����ұ��?(y|n)");
                char c = scan.next().charAt(0);
                if (c == 'y' || c == 'Y') {
                    System.out.println("Game Over");
                    System.exit(0);
                } else {
                    System.out.println("�� ������ �ٽ� �����մϴ�!");
                    process(); //���ȣ��
                }
 
            }
 
        }
 
    }
 
    public static void main(String[] args) {
 
    	im_Soo baseball = new im_Soo();
        baseball.process();
 
    }
 
}