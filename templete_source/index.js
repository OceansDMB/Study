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

// -1 값 출력 -> 없음.

// find : findIndex와 유사하지만, 지정한 데이터 위치를 리턴하는 것이 아니라,
// 지정한 객체를 리턴함.

const myArray = [
  {
    id: 1,
    name: "dave lee",
  },
  {
    id: 2,
    name: "Alex",
  },
];

console.log(myArray.indexOf("Alex"));
console.log(myArray.findIndex((item) => item.name === "Alex"));
console.log(myArray.find((item) => item.name === "Alex"));

// filter : 배열에서 특정 조건에 맞는 아이템만 추출할 때 사용하는 기능

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = myArray.filter((item) => item % 2 === 0);
console.log(even);

// 홀수만 추출

// 1. 삼항연산자 : 간결한 문법으로 자주 사용 됨
// 간결한 문법보다는 선명하게 이해되는 문법이 선호되나, 가끔 사용 됨.

condition ? exprIftrue : exprIfFalse;

const data = [1, 2];

if (data.length === 0) {
  console.log("빈 배열입니다.");
} else {
  console.log("배열이 차있습니다");
}

// 와 같은 구문이 있다고 할 때, 이를 간략히 하면

data.length === 0 ? console.log("빈배열") : console.log("배열이 차있습니다.");

//또는

let.descMyArray = data.length === 0 ? "빈배열" : "아이템이있음";
console.log(descMyArray);

// 로 작성

// 2. 함수의 기본 인자(파라미터) 값 설정
// ES6 에서 나온 문법으로, 인자 값을 넣지 않을 시, 디폴트로 인자에 넣어지는 값 설정가능

// 인자 값을 넣지 않을 시의 이슈

function printName(name) {
  console.log(name);
}
printName();
// undefined

function printName(name = "인자를 선택하세요") {
  console.log(name);
}
printName();
// 인자를 선택하세요

function prinetData(item, name = "dylan") {
  console.log(item, name);
}
prinetData(1);
// 1,dylan

function prinetData(item, name = "dylan") {
  console.log(name);
}
prinetData(1);

// dylan

// 3.구조 분해 할달 (비구조화 할당) 문법
// 배열이나 객체의 속성을 해체해서,값을 개별 변수에 대입할 수 있게하는 문법
// python 에서 list 처럼,javascript 에서는 객체 리터럴 기반 객체와 배열이
// 가장 많이 사용되는 데이터 구조이며, 구조 분해 할당은 객체와
// 배열을 좀 더 쉽게 다루는 문법으로 이해하면 됨.

// 객체 구조 분해 할당

let data = {
  name: "dylan",
  age: 31,
};

let { age, name } = data;
console.log(name, age); // 동일한 property 명을 입력해야 해당 values 대입

// property 명과 다른 변수명을 사용하고자 할 경우,
// 대입할 property 명 : 다른 변수명 의 형태로 써줘야 함

let { name: myName, age: myAge } = data;
console.log(myName, myAge);

// 꼭 객체의 모든 Property를 가져올 필요는 없고, 객체의 property중
// 가져오고 싶은 데이터만 가져올 수 있음.

let { name: myName2 } = data;
console.log(myName2);

// 가져올 property가 정의되어 있지 않을 경우에는 디폴트값으로 대입하게끔 할 수 있음

let data = {
  name: "dylan",
  age: 31,
  hobby: "coding",
};

const { name: myName, age: myAge, special = "python" } = data;

console.log(myName, myAge, special);

// property 를 가지고 있다면 해당 값, 없다면 디폴트 values 지정

// 배열 분해 할당 : 배열의 각 아이템을 별도 변수에 할당하는 문법

let myArray = [1, 2, 3, 4];
let [first, second, third, fourth] = myArray;

console.log(first, second, third, fourth);
// 배열의 일부만 추출 가능, 첫번째 아이템부터 대입, 대입할 변수가 없을 경우는 대입하지 않음

let [data1, data2] = myArray;
console.log(data1, data2);

// 대입할 아이템이 없을 경우, undefined로 대입

let myArray2 = [1, 2];
let [item1, item2, item3] = myArray2;
console.log(item1, item2, item3);

// 뽑고싶은거만 뽑으려면

let data = [1, 2, 3, 4];

const [, , item1] = data; // 3만 뽑겠다
console.log(item1);

// 뽑고싶은거 뽑고 나머지는 배열로 뽑아달라

let data = [1, 2, 3, 4];

const [, item1, ...item2] = data; // 2 뽑고 뒤에꺼는 전부 배열로 묶어라
console.log(item1, item2);

// 객체와 마찬가지로 기본값을 설정할 수도 있음

let myArray1 = [10, 20];
let [item1, item2 = 10, item3 = 20] = myArray1; // 2번쨰 이미 20 할당되어있으므로 10으로 바꾸기 불가능
console.log(item1, item2, item3);

// 유용한 구조분해 할당 문법 팁

// 변수값 교환하기

let a = 1;
let b = 2;

[a, b] = [b, a]; // 쉽게
console.log(a, b);
// a= 2 , b = 1

let c = a;
a = b;
b = c;
console.log(a, b); // 억지로

// 함수 리턴시 여러 데이터 넘겨주기

function getData() {
  return [10, 20, 3];
}

let [a, b, c] = getData();
console.log(a, b, c);

// 문자열 분리해서, 각각의 변수에 대입하기

// split(): python과 달리 구분할 인자를 넣어주지 않는다고 해서,
// default로 '' 로 구분되지는 않으므로, 명시적으로 '' 인자를 넣어야 함.

let data = "Dylan,Alex";
console.log(data.split("")); // "D","y","l","a","n",",","A","l","e","x"
console.log(data.split(",")); // "Dylan","Alex"
let [name1, name2] = data.split(",");
console.log(name1, name2);

// Rest Parameter : 함수 인자 선언 앞에 ... 을 붙여서 정의하는 문법
// 해당 함수에 전달된 인자 리스트는 하나의 배열로 해당 변수에 넣어짐

function getData(...rest) {
  console.log(rest);

  console.log(Array.isArray(rest));
}
getData(1, 2, 3, 4, 5);

// typeof rest 실행시는 object 로 출력되므로, Array.isArray() 의 경우
// 인자값이 배열이면 true를 return 하므로,
// 이를 사용해서 해당 변수가 배열임을 확인

function getData(a, b, ...rest) {
  console.log(rest);
  console.log(a, b);
}
getData(1, 2, 3, 4, 5);
// 인자의 수만큼 순차적으로 인자값이 대입되고, 나머지만 배열로 대입


// ...변수는 함수의 맨 마지막에 나와야 함

function getData(...rest,a,b)// 이와같은형태 X
function getData(a,b,...rest)// ...변수는 함수의 맨 마지막에 나와야 함


// 5. Spread parameter
/* Rest parameter 와 마찬가지로 ...을 붙여서 정의하는 문법
  literable 한 변수 앞에 붙여서, 해당 변수의 데이터를 개별 아이템으로 분리함
    literable 이란 반복 가능한 객체를 의미하며, 배열,문자열들을 의미함
*/

  let myArray = [1,2,3];
  console. log(...myArray);  // 1 2 3
  console.log(myArray[0], myArray[1], myArray[2]); // 1 2 3 

// Spread Parameter 사용이 유용한 경우
  // 함수 인자에 맞추어, 배열의 각 아이템을 대입하고 싶을 경우

  function func(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
  }

  const data = [1,2,3];
  func(...data);

  // 기존 배열로 새로운 배열 구성하기
  const myArray1 = [1,2,3];
  const myArray2 = [...myArray1,4,5,6];
  console.log(myArray2);

  // concat - 두 배열 합치기 ,- 이때에는 배열을 앞 뒤로만 붙일 수 있었고
  // 배열의 사이에 위치할 수 없었다. 

  const myArray1 = [1,2];
  const myArray2 = ['dylan',6];
  let myArray = myArray1.concat(myArray2);
  console.log(myArray);
// concat - rewind.



// modern web을 위한 Javascript+ES6 how to make a solution of hoisting Issue.

// Hoisting Issue
// ㄴ> 일반적인 언어는 함수,변수를 선언한 후, 이후 라인에서 해당 함수와 변수를 
// 사용 할 수 있으나, Javascript 에서는 함수 또는 변수 선언 전에 해당 함수 
// 또는 변수를 사용해도 에러를 내지 않는 현상을 의미함 .

// var keyword 
// var keyword는 let 과 같이 변수 선언에 쓰이는 키워드로, let과 달리 동일한
// 이름의 변수를 여러번 선언 할 수 있음. 
// var keyword는 참고로만 알아두고 사용하지 않음.

var a = 1; 
var a = 2; 
console.log(a);


// Hoisting 현상은 var keyword와 function declear 시에 일어남.
console.log(a);
a = 10;
console.log(a);
var a = 20;

// 위의 예는 다음과 같이 실제로 동작함
var a; 
console.log(a);
a = 10;
console.log(a);
a = 20;

// 함수의 경우도 동일함 

getData();

function getData(){
  console.log("Hello World");
}
// 위의 경우에도 함수가 정의되기 전에 작성되었으나, 실제로는 함수 선언이 맨 위에서
// 실행 된 후 , 다음 코드들이 실행된다. 
// 아래 실제 동작
function getData(){
  console.log("Hello World");
}

getData();


// Hoisting 이유 

/* 
 - javascript 는 함수와 변수 선언을 실행 전, 실행 영역의 맨 앞으로 이동해서 실행함.
 - javascript 의 변수에 대한 실행 lifecycle 은 다음과 같음
   * 선언(var a;) > 초기화 (a = 1;) > 사용 ( a += 1;)
   * Javascript 에서 선언과 초기화 문법을 동시에 쓸 수 있음(var a = 1;)
   * 하지만 내부적으로 javascript 는 함수와 변수 선언 부분만 분리해서, 실행 
   * 영역 맨 앞으로 이동해서 실행함. 
   * 따라서 Hoisting 현상이 일어난 변수는 변수를 선언만 한 상태이기 때문에
   * 아직 값이 초기화되지 않아서 해당 변수는 undefined 가 들어가 있게 됨.
 */

 //  & 해결방안

 // 1. 변수 선언의 경우, var keyword 사용X let,const 사용할것.
 //   관련한 test는 chrome 개발자 mode console 에서 진행 
 // 2. 함수 선언의 경우 함수 표현식으로 사용할것
 //   함수 선언문과 함수 표현식

 // 함수 선언문
  function getData() {
    console.log("Hello World");
  }

 // 함수 표현식 
  let getData = function() {
    console.log('Hello World');
  }

  // &. 함수 표현식 사용 예 
  // 다음 code에서 getData 를 var로 선언할지라도, getData는 함수가 아닌 
  // 변수로 인지하므로 에러가 남

  getData();

  let getData = function() {
    console.log("Hello World");
  }


  // 2. scope 
  /*- scope란 javascript 변수또는함수 선언시 해당 변수 또는 함수가 유효한 범위를 의미
    - javascript scope 는 다음과 같이 3가지 scope가 있음
      * Global(전역) scope : code 전체 범위
      * Function(함수) scope : 함수 내에서의 범위
      * Block(블록) scope : {} 괄호로 이루어진 블록 내에서의 범위
    - 일반적인 프로그래밍 언어는 전역 scope,함수 scope로 나눠지는데 반해서, 
      javascript는 Block scope가 추가로있고 선언에 따라 유효범위가 다름.!
   */
  
  // 2.1 전역 Scope 
  // Block 또는 function 안에서 declared 하지않고, external declared 한 
  // variable or function 으로 func or Block 포함 모든 code 에서 사용 가능.

  //ex 
  let data = 1;   // 어떠한 scope 내에 존재하지 않으므로 전역 사용 가능.

  function getData(){
    let item = 2;  // function 안에서 declared 하였기에 외부에서 접근 불가
  }

  // let과 const는 Block scope 
  // * block scope 는 {} 로 이루어진 영역을 의미함
  // * let 과 const 로 declared 한 variable 은 block 내에서 
  // * declared 되었다면 block 밖에서는 접근불가 

  {
    const name = 'dylan';
    console.log(name);
  }
  console.log(name); // undefined or error 


  let name = 'dave';
  {
    console.log(dave); // 정상출력
  }
  console.log(dave);// 정상 출력

  {
    let name = "dave1";
    {
      let name2 = "dave2";
      console.log(name);
    }
    console.log(name2);
  }
  console.log(name);
  
  // if와 for 문에서도 block을 사용하고 있으므로, 해당 block 안에서 let 또는
  // const로 선언된 변수들은 block scope가 적용됨

  const item1 = 1;
  if (item1 === 1 ){
    let item2 = 2;
    console.log(item2);
  }
console.log(item2); // block 안에서 되었으므로 외부에서 선언 불가

// 함수 선언도 마찬가지로 함수 내부에서 선언된 함수는 외부에서 호출할 수  없음.

var name = 'dave';
function getName() {
  console.log(name);
  function showMsg() {
    console.log('Hello');
  }
}
getName();
showMsg();
console.log(name);


// var keyword 와 function scope 
 // var keyword는 함수 scope를 가짐
 // function 안에서 var keyword로 선언된 variable 은 함수 외부세어는 유효하지 
 // 않지만, 블록 안에서 var keyword로 선언된 변수는 블록 외부에서도 유효함.
 // (이를 함수 scope라고 함)
 // 블록 외부에서 var keyword로 선언된 변수는 당연히 block 안에서 접근가능

 var data = 1;
 function func() {
   var item = 2;
   console.log(data); //
 }
 func();
 
 {
   var item2 = 3;
 }
 console.log(item2);
  

  // 전역변수와 지역변수 
  /* 함수에서 선언된 변수를 지역변수라고 하며, 
      전역 scope 를 가진 변수를 전역변수라고 이야기함 
      -동일한 이름을 가진 전역변수와 지역변수가 있으면, 
      함수 안에서는 지역변수를 우선해서 사용
      */
  
  var name = 'dylan';
  function get_name() {
    var name = "Alex";
    console.log(name);  // Alex 출력
  }
  get_name();
  console.log(name);  // Dylan 출력 

  let name = 'dylan';
  function get_name() {
    let name = "Alex";
    console.log(name);  // Alex 출력
  }
  get_name();
  console.log(name);  // Dylan 출력 
  
  // let 으로 선언을 했음에도 에러가 나지 않고 
  /* 함수  내에서는 지역변수값으로, 함수 밖에서는 전역변수 값으로 
     처리가 됨  */

  
  /* 
    백엔드와 통신을 위한 javascrpt 문법에 대해 정리
    Promise 이외에 ES6 이후,async/await 등의 문법도 있지만,
    호환성 이슈로 인해 현재까지는 Promise 를 사용해야 함 .

1. 동기적 처리와 비동기적 처리 
  Syncronous(동기) : 요청을 보낸 후, 해당 요청의 응답을 받아야 다음
                    동작을 실행(코드를 한 줄 실행 완료 후 다음줄 실행)
  Asyncronous(비동기) : 요청을 보낸 후, 응답과 관계 없이 다음 동작을 실행
                    (코드를 한줄 실행 후, 완료와 상관없이 다음 줄 진행)

  비동기적 처리의 이해 
  - 대부분의 프로그래밍 언어는 동기적 처리를 지향함. 
  - 하지만 javascript의 경우는 실행이 오래 걸리는 동작의 경우, 
  이를 온전히 기다릴 필요 없이 다음 작업 실행이 가능하도록, 
  비동기적인 처리도 가능하도록 되어 있음. 
  - 따라서, javascript는 다른 언어와 마찬가지로 동기적 처리가 기본이지만
    일부 기능은 비동기적으로 처리가 가능하도록 관련 기능을 추가로 
    제공하고 있다고 이해하면 좋음.
    참고 : https://stackoverflow.com/questions/2035645/when-is-javascript-synchronous
    
    & 주요 비동기적 처리
    오래 걸리는 기능은 비동기적으로 처리됨
    - Rest API 요청
    - 파일/ 데이터베이스 처리
    - 타이머, 암호화/복호화 등 

    & 비동기 처리 예 (setTimeout 함수)
    setTimeout()
    setTimeout(function,milliseconds)
    milliseconds : ms 만큼 기다리기 
    function : milliseconds 에서 설정한 ms 만큼 기다린 후, 호출할 함수


    */
    console.log("안녕하세요");  // 바로 출력
    setTimeout(() => {
      console.log("dave lee 입니다"); // 3초 후 출력
    }, 3000);
    console.log("잔재미코딩입니다."); // 바로 출력

    // 결과값 : 안녕하세요
    //         잔재미코딩입니다.
    //         dave lee 입니다.
    // 와 같이 setTimeout() 세팅 t 를 기다리지않고 바로 다음 동작 실행.

    // 비동기 처리의 문제점
    /* 예를 들어, Rest API를 호출해서 결과값을 받아서, 이를 기반으로
      코드를 실행하는 경우를 생각해보기로 함.
      해당 함수 호출 후, 결과값을 받지 않은채로, 다음 코드가 실행되면,
      전체 코드 실행에 문제가 됨.
      Vanilla javascript 에서 Rest API 호출을 위해 
      XMLHttpRequest 라는 기술(함수)을 제공하지만, 호환성 이슈가 
      있으므로, 최신 기술이고 보편적으로 쓰이는 axios 를 사용하는것이
      최근 추세임.

    비동기 처리의 문제점을 해결할 수 있는 콜백함수(Callback Function)
      -first-class function
      -함수 자체를 변수에 저장 가능
      -함수의 인자에 다른 함수를 인수로 전달 가능
      -함수의 반환 값(return 값)으로 함수를 전달 가능
       */

      console.log("안녕하세요"); // 1출력
      function desc(callback) {
        setTimeout(() => {
          console.log("dave lee 입니다"); // 2 출력
          callback();  // 그다음 desc 안에 적힌거를 실행시켜라.
        }, 3000);  // 언제? 3초 타이머 후에~
      }
      
      function desc2() {
        console.log("잔재미코딩입니다.");  // desc안에 적을건 이거다.
      }
      desc(desc2);
    // 이런 식으로 순서 뒤바뀜을 해결 가능.
    
    // 콜백지옥
    function func1(callback){ 
      setTimeout(()=>{
        console.log("1");
        setTimeout(()=>{
          console.log("2");
          setTimeout(()=>{      
            callback();
          },500);
      },500);
    },500);
  }
  function func2(){
    console.log("3");
  }
  func1(func2);

  // 조금만 복잡한 코드를 진행하기만 해도 이와같이 콜백 지옥이 나타남.

  // 콜백 지옥 탈출을 위해서 ES6 에서 promise 함수 사용.

  /* 
      & Promise 
    ES6 에서 공식적으로 추가된 문법으로, 비동기 처리를 위한 콜백함수의
    단점을 극복하기 위해 제안됨.

    1. new 로 Promise 객체 생성
    2. Promise 객체에서는 executor 라는 함수가 자동으로 실행되고, 
      executor 라는 함수는 resolve와 reject라는 두 개의 함수를 
      인자로 받아서 비동기 처리 함수를 실행
    3. executor 를 통해 비동기 처리 함수를 실행 완료 후, 해당 작업이 성공이면
      resolve, 실패면 reject 함수를 호출
  
  */
  // Promise 객체 생성  
  const runCode = new Promise((resolve, reject) => {
    // 비동기 작업수행
    setTimeout(() => {
      let num = 10;
      if (num > 9) {
        // 비동기 작업 성공시
        resolve(num);
      } else {
        // 비동기 작업 실패시
        reject("errer");
      }
    }, 1000);
  });
  
  runCode.then(
    (item) => {
      console.log("success", item);
    },
    (err) => {
      console.log(err);
    }
  );
  /* Promise의 3가지 상태(states) 
    위 코드에서는 promise 변수(즉, Promise 객체)는 다음과 같이 
    3가지 상태를 가질 수 있음. 
    - Pending(대기) : 비동기 처리가 아직 실행되지 않은(초기) 상태
    - Fulfilled(이행) : 비동기 처리가 성공적으로 완료된 상태
    - Rejected(실패) : 비동기 처리가 실패한 상태

    then method. 
    위 code 에서 작업 성공 또는 실패시, 수행할 작업을 정의하고, 
    promise code를 실행해주는 method.


    두 callback function을 인자로 받음
      - successCallback : 작업 성공 시의 실행 함수
      - failureCallback : 작업 실패 시의 실행 함수

      promise.then(successCallback, failureCallback)
  */

  // then method 에 하나의 function만 선언할 경우, 이는 
  // successCallback 동작만 선언한 셈임

  const runCode = new Promise((resolve, reject) => {
    // 비동기 작업수행
    setTimeout(() => {
      let num = 10;
      if (num > 9) {
        // 비동기 작업 성공시
        resolve(num);
      } else {
        // 비동기 작업 실패시
        reject("errer");
      }
    }, 1000);
  });
  
  runCode.then((item) => {
    console.log("success", item);
  });

  // callback 지옥과 Promise 

  const runCode = new Promise((resolve, reject) => {
    // 비동기 작업수행
    setTimeout(() => {
      let num = 10;
      if (num > 9) {
        // 비동기 작업 성공시
        resolve(num);
      } else {
        // 비동기 작업 실패시
        reject("errer");
      }
    }, 1000);
  });
  
  // 실행 순서에 맞춰줄 필요가 있을 때, then을 이어서 작성해 줄 수 있음
  runCode.then(
    (item) => {
      console.log("success", item);
    },
    (err) => {
      console.log(err);
    }).then(() => {
      console.log('By dylan');
    }, () => {
      console.log("error2");
    }
  );