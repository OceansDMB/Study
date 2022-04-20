age = 18;

if age<20:
    print('청소년 할인')# 들여쓰기 없는 print()
    #python은 블록에서 반드시 들여쓰기를 해야 함.
    """
    파이썬의 들여쓰기
     - 파이썬은 들여쓰기가 매우 중요한 프로그래밍 언어임.
      : C/C++ 이나 Java,Pascal 등 전통적인 프로그래밍 언어와 다른 특징.
      
     if 문 
      i) 블록은 흔히 코드 블록(code block)이라고도 함.
       <- 소스 코드에서 함께 묶을 수 있는 코드의 덩어리를 의미.
      ii)파이썬은  if 문 다음에 colon ":" 이 나오면 다음에 들여쓰기 코드 블록이
         나와야 함. 
       <- 코드블록은 else,elif,for,while,def,class 등에서 사용 됨.
      iii) [if_youth_error2] 와 같이 동일한 블럭에 대해 들여쓰기의 
            칸 수가 일정하지 않으면 "IndentationError:unexpected indent"
            라는 들여쓰기 오류 발생.
       <- 동일한 코드 블록에서는 들여쓰기의 칸 수를 반드시 일치시켜야 함.
       <- 들여쓰기는 "space 4칸"을 가장 많이 사용.
      
    """