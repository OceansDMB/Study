
public class Description {

}
/*
  - 1 -
  패키지 : 
  서로 관련된 클래스와 인터페이스의 컴파일 클래스 파일들을 하나의 디렉터리에 묶어놓은 것
  
  모듈 : 
  여러 패키지와 이미지 등의 자원을 모아 놓은 컨테이너
  JDK9 부터 자바 API의 모든 클래스들(자바 실행 환경)을 패키지 기반에서 모듈들로 완전히 재구성
  응용프로그램 역시 여러 개의 모듈로 분할하여 작성 가능
    - 클래스들은 패키지로 만들고, 다시 패키지를 모듈로 만듦.
  목적-
   자바 API를 여러 모듈(99개) 로 분할하여 응용프로그램의 실행에 적합한 모듈들로만 실행 환경을 구축할 수 있도록 함.
   메모리 등의 자원이 열락한 작은 소형 기기에 꼭 필요한 모듈로 구성된 작은 크기의 실행 이미지를 만들기 위함.
   
  모듈의 현실-
   Java 9부터 전면적으로 도입, 복잡한 개념, 큰 자바 응용프로그램에는 개발,유지보수 등에 적합.
  
  패키지명과 클래스의 경로명
   점(.)으로 연결
   Project.FileIO.Tools.class
   Project.UI.Tools.class 

  - 2 - 
  - 2.1- 다른 패키지에 작성된 클래스 사용.
  
  가 ) import를 이용하지 않는 경우.
  소스 내에서 패키지 이름과 클래스 이름의 전체 경로명을 써주어야 함.
  ex.)
   public class ImportExample{
     public static void main(String[] args){
      java.util.Scanner scanner = 
      	new java.util.Scanner(System.in);
      	System.out.println(scanner.next());s
     }
   }
 
  나 ) import를 이용하는 경우
  - 소스의 시작 부분에 사용하려는 패키지 명시
     (소스에는 클래스 명만 명시하면 됨)
  - 특정 클래스의 경로명만 포함
  ex.)
   import java.util.Scanner;
   	public class ImportExample{
   		public static void main(String[] args){
   			Scanner scanner = new Scanner(System.in);
   		}
   	} 
   	
  - 패키지 내의 모든 클래스 포함
  ex.)
  import java.util.*;
  	public class ImportExample{
  		public static void main(String[] args){
  			Scanner scanner = new Scanner(System.in);
  		}
  	}
  - *는 현재 패키지 내의 클래스만을 의미하며 하위 패키지의 클래스까지 포함하지 않는다.
  
  
  
  - 3 -
  패키지 선언
  	package 패키지명;
  	 - 컴파일한 클래스 파일을 패키지명의 디렉터리에 저장하라는 지시
  	 - 소스 파일의 첫 줄에 선언
  - Ex.)
    package UI; // Tools 클래스를 컴파일하여 UI 패키지에 저장할 것을 지시
    
    public class Tools{  // 이제 이 클래스의 경로명은 UI.Tools 가 된다.
    ............
    }
  - Tools 클래스의 경로명은 UI.Tools
  - 다른 클래스에서 Tools 클래스를 사용하기 위해서는 import UI.Tools 
  - Ex.)
  	package Graphic; // Line 클래스를 Graphic 패키지에 저장
  	
  	import UI.Tools; // Tools 클래스의 경로명 알림
  	
  	public class Line {
  		public void draw(){
  			Tools t = new Tools();
  		}
  	}
  
   - 4 -
   디폴트 패키지
    - package 선언문이 없이 만들어진 클래스의 패키지
    - 디폴트 패키지느 현재 디렉터리
   
   패키지의 특징
    - 패키지 계층구조
      ㄴ 관련된 클래스 파일을 하나의 패키지로 계층화하여 관리 용이ㄴ
    - 패키지별 접근 제한
      ㄴ 패키지 별로 접근 권한 가능
    - 동일한 이름의 클래스와 인터페이스의 사용 가능
      ㄴ 서로 다르 패키지에 이름이 같으 클래스와 인터페이스 존재 가능
    - 높은 소프트웨어의 재사용성
  
   - 5 - 
   모듈
    - Java 9 에서 도입된 개념 
    - 패키지와 이미지 등의 리소스를 담은 컨테이너
    - 모듈 파일(.jmod)로 저장
    
  - 6 - 
  자바 플랫폼의 모듈화 
  
  자바 플랫폼
   - 자바의 개발 환경(JDK)과 자바의 실행 환경(JRE)을 지칭
     ㄴ java SE(자바 API) 포함
   - 자바 API의 모든 클래스가 여러 개의 모듈로 재구성됨.ㄴ
   - 모듈 파일은 JDK의 jmods 디렉터리에 저장하여 배포
   모듈 파일로부터 모듈을 푸는 명령
    jmod extract "C:\Program Files\java\jdk-10\jmod\java.base.jmod"
      ㄴ 현재 디렉터리에 java.base 모듈이 풀림.
  
  - 7 - 
  자바 모듈화의 목적
   가장 큰 목적
   - 자바 컴포넌트들을 필요에 따라 조립하여 사용하기 위함.ㄴ
   - 컴퓨터 시스템의 불필요한 부담 감소
     ㄴ 세밀한 모듈화를 통해 필요 없는 모듈이 로드되지 않게 함.
     ㄴ 소형 IOT 장치에도 자바 응용프로그램이 실행되고 성능을 유지하게 함. 
  
  - 8 - 
  주요 패키지 
  
  -java.lang
   - 자바 language 패키지 
     ㄴ 스트링, 수학 함수, 입출력 등 자바 프로그래밍에 필ㄹ요한 기본적인 클래스와 인터페이스
   - 자동으로 import 하므로 import 문 필요 없음.
  
  -java.utils
   - 자바 유틸리티 패키지
     ㄴ 날짜,시간,벡터,해시맵 등과 같은 다양한 유틸리티 클래스와 인터페이스 제공
     
  -java.io
   - 키보드, 모니터,프린터,디스크 등에 입출력을 할 수 있느 클래스와 인터페이스 제공
   
  -java.awt
   - 자바GUI 프로그래밍을 위하 클래스와 인터페이스 제공
  
  -javax.swing
   - 자바GUI 프로그래밍을 위한 스윙 패키지.
   
   
  
  
  
  
  
  
  
  
  
 */
 