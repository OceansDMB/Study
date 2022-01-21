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
