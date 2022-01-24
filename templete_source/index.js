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
    return "Hello!";
  }
}

const dave = new User1("dave", 30);
console.log(typeof dave, dave.name, dave.age, dave.get_message());

const dylan = new User1("dylan", 31);
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

/*   class Animal {
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



  console.log(dave); */

// Javascript 반복문 //

/* javascript 는 다양한 반복문 문법을 지원
  
    for (초기문; 조건문; 증강문) {
      ...
    }

    초기문 : let i = 0; 과 같은 변수 선언을 쓰는 것이 일반적임
    조건문 : i < 5; 와 같이 반복할 조건을 쓰는 것이 일반적임
    증감문 : i++; 과 같이 다음 반복 전에 실행되는 구문 
    초기문을 먼저 실행 후, 조건문에 맞으면 반복 1회, 그 다음에 증감문 실행 후, 
    조건문에 맞으면 다음 반복 실행

  */

for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("end");

/*     배열과 for 문 
      파이썬에서 리스트 변수의 각 아이템을 꺼내어 반복문으로 실행하는 경우가 많듯이,
      javascript도 유사한 기능을 구현 가능 

      length 사용 : 배열의 길이만큼 반복하기 */

const data = ["Dave", "Alax", "Dylan"];
for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

const data = ["Dave", 30, true];

for (let i = 0; i < data.length; i++) {
  console.log(typeof data[i]);
}

// for ... of 문 사용하기 //
const data = ["Dave", 30, true];

for (let item of data) {
  console.log(item);
}

/* 객체와 for문 
  for... in 문으로 객체의 키를 반복할 때마다 가져올 수 있음

    &참고 
    Object.entries(),Object.key(),Object.values()를 사용해서, 파이썬 사전을
    반복문에 키와 같은 기반으로 사용하는 형태와 유사한 기능을 사용할 수 있음.
    
    Object.entries : property와 key값으로 이루어진 각 property set의 list
                    즉,[[키,값],[키,값],[키,값]]등으로 이루어진 배열 반환
    Object.keys : property key list. 즉[키,키,키] 등으로 이루어진 배열 반환
    Object.values : property values [값,값,값] 등으로 이루어진 배열 반환

*/

/* const data = {
  name: "dave",
  age: 20,
  brand: "funcoding",
  get_message: function () {
    return "today I Learn";
  },
};

console.log(Object.entries(data));
console.log(Object.keys(data));
console.log(Object.values(data));
 */
/* const data = {
  name: "dave",
  age: 20,
  brand: "funcoding",
  get_message: function () {
    return "today I Learn";
  },
};

for (let qwe in data) {
  console.log(data[qwe]);
}


let i = 0;
while (i < 5) {
  console.log(i);
  i++;
} */

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

/* javascript 배열 CRUD 
  데이터 구조를 다루는 문법을 익힐 때에는 기본적으로 CRUD 문법을 확인하면 됨. 
  - Create , Read , Update , Delete


  javascript 배열 생설 (CRUD의 create)
  python 과 마찬가지로 [] 괄호를 사용하고, 내부에서 아이템을 콤마(,)로 구분해서 넣으면 됨

  객체와 마찬가지로 새로운 배열로 배열 변우싀 배열을 덮어씌우는 경우는 많지 않으므로,
  배열 변수 선언시 const를 많이 사용함.
*/

const data = [];

data[0] = 1;
data[1] = 2;

console.log(data[0], data[1], data[data.length - 1]);

// Javascript  배열 읽기 (CRUD의 Read)
// python 과 마찬가지로 0번부터 시작하는 인덱스의 번호로 각 아이템을 읽을 수 있음.
const myarray = [1, 2, "dave", 100];
myarray[0] = "funccc";
console.log(myarray[0]);
console.log(myarray.length - 1);

// Javascript  배열 읽기 (CRUD의 Update)
// python 과 마찬가지로 인데스 번호로 각 아이템을 수정할 수 있음.

const myArray = [1, 2, "dave", 100];
myArray[0] = "funcoding";
console.log(myArray);
// 수정 할 떄에는 수정할 배열의 번호를 지칭해서 수정할 값을 넣으면 됨

// Javascript  배열 읽기 (CRUD의 Update)

// 배열변수,splice(삭제를 시작할 index번호, 거기서부터 몇개 삭제할것인지)

const myArray = [1, 2, "dave", 100];
myArray.splice(1, 1);
console.log(myArray);

// 특별한 형태의 javascript 배열
/* python 에서 python list 안에 또 다른 list 또는 사전 데이터가
    들어갈 수 있는 것처럼 javascript 배열도 다양한 형태의 배열이 가능함. */

// 다양한 데이터 타입을 아이템으로 가질 수 있음
const data = [10, 5, "dave", null];

// 여러 라인으로 선언 가능
const data2 = ["dave", "fun-coding", 1];

// {} 괄호는 객체  리터럴을 통한 객체로 인지하며, 객체도 아이템으로 선언가능
const data3 = [
  { name: "dylan", age: 31 },
  { name: "Oceansprogram", age: 25 },
];

// 배열 안에 배열도 가능
const data4 = [
  [10, 20, 30],
  [40, 50, 60],
];
console.log(data1);

// 개별 아이템이 객체일 경우, 인덱스 번호로 객체의 프로퍼티도 접근 가능
const data1 = [1, 2, "dave", null];

const data2 = [
  { name: "dylan", age: 31 },
  { name: "OceansProgram", age: 25 },
];

// 개별 아이템이 별도 배열일 경우, 인덱스 번호로 배열의안의 배열 접근 가능

const data3 = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(data1[0]);
console.log(data2[0].name);
console.log(data3[0][2]);

/* & 다양한 배열 관련 기능(함수) */

// push : 배열의 끝에 특정 함수 추가

const data = [1, 2, 3];
data.push("Dave");
console.log(data);

// pop : 배열의 끝에 있는 아이템을 리턴해주고, 해다 아이템은 배열에서 삭제
//   마지막꺼를 빼서 return,
const myArray = [1, 2, "dave", 100];
let data = myArray.pop();
console.log(myArray);
console.log(data);

// shift : 배열의 첫 번째 아이템을 삭제하고, 뒤에 있는 아이템을 앞으로 당김.

const myArray = [1, 2, 3];
myArray.shift();
console.log(myArray);

// concat : 두 배열 합치기 -> concatenate , concat이 앞으로 오지 못함 .
// 하나 쓰고 뒤에 합칠거 concat(property) 이케 쓰도록.

const data1 = [1, 2];
const data2 = ["dave", 3];
const data3 = data2.concat(data1);

console.log(data3);

// join : 아이템 사이에 특정 문자열을 넣어 모든 아이템을 합쳐서, 하나의 문자열로 만듬

let myArray = [1, 2, "dave", 100];
myArray = myArray.join("|");
console.log(myArray);
console.log(myArray, typeof myArray);

// reverse : 배열을 역순으로 배치
// 함수 호출시 역순으로 배치한 배열을 리턴하는것이아니라 현재 배열을 변경함.

let myArray = [1, 2, "dave", 100];
myArray.reverse();
console.log(myArray);

// slice : 배열의 일부분 반환
// slice(a,b) : a 아이템 인덱스부터 시작해서, b-1 아이템 인덱스까지 추출
const data1 = [1, 2, 3, 4, 5, 6];
let data2 = data1.slice(1, 3);
console.log(data2);

// forEach
// for문을 대체해서, 간단히 배열의 각 아이템을 가져올 수 있는 함수

let myArray = [1, 2, "dylan", 100];
myArray.forEach((item) => {
  console.log(item);
});

// map
// 배열의 각 아이템에 정의한 함수를 적용해서, 새로운 배열을 리턴하는 함수

const myArray1 = [1, 2, 5, 10];
const myArray2 = myArray1.map((item) => item * 2);

console.log(myArray2);

// indexOf : 배열에서 지정한 데이터가 위치한 인덱스 번호를 리턴

let myArray = [1, 2, "dave", 100];
let index = myArray.indexOf("dave");
console.log(index);

// findIndex : 배열의 아이템이 객체일 경우, 해당 객체에서 지정한 데이터
// 찾을 수 있는 방법을 제공함.

const myArray = [
  {
    id: 1,
    name: "Dylan",
  },
  {
    id: 2,
    name: "Alex",
  },
];

console.log(myArray.indexOf("Alex"));
console.log(myArray.findIndex((item) => item.name === "Alex"));

// find : findIndex와 유사하지만, 지정한 데이터 위치를 리턴하는 것이 아니라,
// 지정한 객체를 리턴함.
