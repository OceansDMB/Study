/* Arrow Function */
let func = (name) => console.log("hi" + name);

func("dave");

/* Arrow function2 */

let func = function (item1, item2) {
  return item1 * item2;
};
/* is same as */

let func2 = (item1, item2) => item1 * item2;

console.log(func(1, 2));
console.log(func2(1, 3));

/* 객체란 내부 변수와 내수 함수를 가진 특별한 타입
    javascript 객체는 프로퍼티와 메서드로 이루어 져 있음. 
                프로퍼티는 파이썬의 속성과 동일한 변수라고 보면 됨.
    프로퍼티라고 부르는 변수, 메서드라고 부르는 함수 
    
    Javascript : property Key : 변수명 , Property value : 해당 변수에 할당된 값
    Python : attribute(속성, 일종의 변수) , method(함수) 
    CSS : property , property 대응값
    HTML : attribute(속성), attribute key(속성값)

    Javascript 객체 property, method 
    property key , value 
    프로퍼티 키는 보통 문자열 또는 symbol 값으로 구성, 
    프로퍼티 값은 해당 키에 저장하고자하는 데이터가 들어가 있음. 


    & class oriented  / prototype oriented 
    
    class oriented : 각각의 부모자식이 상속된 class 생성 후 원하는 객체를 생성하는 방식
    prototype oriented : 여러가지 변수와 기능을 모아 둔 하나의 객체를 정의하고 그 객체를 사용하는 방식

    객체 생성 방법 : {} 괄호 안에 property key : property value로 필요한 property define.

    cont 객체이름 : {
        프로퍼티 키 : 프로퍼티값,
        .
        .
        .
        .
    };
    & 객체 이름 선언시 보통 const 사용
*/
// & 주요 사용법//
// 객체 property 값 가져오기 //
/* const emptyObject = {};
    console.log(emptyObject);
    emptyObject.name = "dave";
    console.log(emptyObject);
    emptyObject.age = 10;
    emptyObject.get_data = function () {
    return 1 + 2;
    };
    console.log(emptyObject);
    console.log(emptyObject.age,emptyObject.get_data());
    */
/* const user = {
    age: 10,
    name: "dylan",
    get_data: function () {
        return 1 + 2;
    },
    };

    console.log(user);
    console.log(user.age);
    console.log(user.name);
    user.age = 20;
    console.log(user.age);
    console.log(user.get_data());
    */

/* const user = {
  age: 10,
  name: "dylan",
  details: {
    hobby: "coding",
    major: "Energy resourse engneering",
    get_details: function (item) {
      return item * 2;
    },
  },
};
console.log(user, user.age, user.name, user.details.get_details(2));

    객체 프로퍼티값 가져오기,
    객체 메서드 선언하기, 
    빈 객체 선언 후, 프로퍼티와 메서드 추가 가능.
    객체 안에 객체도 생성 가능.
 */

// & 객체 리터럴 사용시 유의사항 //
/* 객체 리터럴과 this 키워드
    this 키워드는 자신의 객체를 가리킴
 */
const user = {
  age: 10,
  name: "dylan",
  details: {
    hobby: "coding",
    major: "energy",
    get_hobby: function () {
      return this.hobby;
    },
  },
  get_name: function () {
    return this.name;
  },
};
console.log(user.age);
console.log(user.get_name());
console.log(user.details.get_hobby());

/* 객체 안에서 프로퍼티를 참조해야 할 경우 this key word 사용.
   객체 메서드 선언단계에서 arrow func 사용 가능 
*/

const user = {
  age: 10,
  name: "dylan",
  get_data: function () {
    return 1 + 2;
  },
};
console.log(user.age, user.name, user.get_data());

const user = {
  age: 10,
  name: "dylan",
  get_data: () => 1 + 2,
};
console.log(user.age, user.name, user.get_data());

// 하지만 arrow func 에서 this 는 function 에서의 this 와 가리키는것이 다름//
// arrow func 내에서 this는 완전히 이해하기 전까지 봉인//



/* getter 와 setter 
  클래스 기반 객체 지향 문법에서는 클래스 내부 변수를 외부에서 어느
  범위까지 접근할 수 있을지를 지정하는 문법을 제공
  public,private,protected 와 같은 keyword 제공
  정보 은닉(information Hiding) 과 캡슐화 컨셉과 관련 있음
  
  Javascript 객체 리터럴에서는 이와 유사한 기능으로 getter와 setter기능을 제공
  'getter(획득자)'와 'setter(설정자)' 메서드로 표현
  메서드를 포함해서 전체를 property라고 할 때, 프로퍼티를 데이터 프로퍼티
  접근자 프로퍼티(getter와 setter)로 나누기도 함.
  getter는 property 값을 접근할 때,(읽을 때) 호출되는 메서드
  setter는 property 값을 수정하 때,(설정할 때) 호출되는 메서드 


*/

/*   const user = {
    age : 10,
    name : "dylan",

    get get_age(){
      return this.age;
    },
    set set_age(value){
      this.age=value;
    }
  };

  console.log(user.get_age); */

/*   const user = new Object();


  user.age = 10; 
  user.name = "Dylan";
  user.get_data = function(){
    return 1*2;
  }

  console.log(user.age,user.name,user.get_data()); */

/*   function User(age,name) {
    this.age = age;
    this.name = name;
    this.get_data = function(){
      return this.age;
    }
  }

  const dave = new User(10,'dave');
  console.log(typeof dave);
  console.log(dave.age,dave.get_data()); */


  class User1 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    get_message() {
      return 'Hello!';
    }
  }

  const dave = new User1('dave',30);
  console.log(typeof dave, dave.name, dave.age, dave.get_message()); 

  const dylan = new User1('dylan',31);
  console.log(typeof dylan, dylan.name, dylan.age, dylan.get_message()); 

  /* 
    1.class 내부에 constructor()라는 이름으로 하나의 생성자 함수는 작성할 수있음
    function 이라는 키워드 사용하지 않음. 
    2.class 로 정의된 클래스는 new 클래스명() 으로 객체 생성할 수 있음.
    3.class property는 constructor 내부에서 this 키워드로 선언될 수도 있음
    4.객체 생성시 인자 정의는 constructor에서 할 수 있음
    5.class 내부에 메서드 선언 가능

    상속도 일반적인 객체 지향 문법과 유사함

    1. extends를 사용해서, 상속할 클래스를 선언 할 수 있음.
    2. 자식 클래스에서는 super()(부모 클래스의 constructor()를 호출함)
        를 constructor() 안에서 호출 해야 함.
    
    */

/*   class Animal {
    constructor(name){
      this.name = name;
    }
  }

  class User extends Animal {
    constructor(name, brand) {
      super(name);
      this.brand = brand;
    }
  }

  const dave = new User('Dylan' , 'Funcoding');
  console.log(dave.name, dave.brand); */

  /* 객체지향의 다형성 (부모 클래스의 메서드명과 동일하지만, 자식 클래스에서
     해당 메서드를 덮어 씌워 다른 동작을 할 수 있는 기능)도 지원됨 */
  
/*   class Animal {
    constructor (name) {
      this.name = name;
    }
  
    get_message(){
      return 'Hello';
    }
  }

  class User extends Animal {
    constructor (name,age) {
      super(name);
      this.age = age;
    }

    get_message(){
      return 'Bye'
    }
  }

  const dylan = new  User(dylan,31);
  console.log(dylan.name,dylan.age,dylan.get_message()); */

  /* hasOwnProperty() 사용법 
    1. 클래스명.prototype.프로퍼티 = 프로퍼티 값 으로도 클래스 외부에서 프로퍼티
    추가 가능(클래스 내부에서 선언하는 것을 추천 하지만, 이 케이스를 
      문법 에러로 막지는 않았음)

    2. 클래스 내부에서 선언한 프로퍼티임을 확인하기 위해 hasOwnProperty(프로퍼티명)
      을 사용 할 수 있음. 

    3. 정의한 property가 외부에서 정의한것인지 내부에서 정의한 것인지를 확인.
    
    4. property 만 사용 가능하고 method 는 사용 불가능.
  */

  class Animal {
    constructor(name){
      this.name = name;
    }
    get_message() {
      return 'Hello';
    }
  }

  Animal.prototype.age = 10;

  const dave = new Animal('Dave');
  console.log(dave.hasOwnProperty('name'));
  console.log(dave.hasOwnProperty('age'));



  console.log(dave);