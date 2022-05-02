// # 1. ES6 에서의 variable 변동점. 
// let / const / var 

// 1. var

// 1.1 var는 한번 선언한 변수를 다시 선언할 수 있다. 

// 1.1.1 예시
// var name = `Mike`;
// console.log(name) ; // Mike
// var name = `Jane`; 
// console.log(name) ; // Jane
// 문제되지 않음.

// 1.1.1 반례
// let name = `Mike`
// console.log(name); //Mike
// let name = `Jane` 
// console.log(name); //Jane
// Identifier `name` has already been daclared
// 1.2 var는 선언하기 전에 사용할 수 있다.
 

// 1.2 var는 선언하기 전에 사용할 수 있다.
// console.log(name);  // undefined
// var name = `Mike`;  // 할당
// 1.2.1 var로 선언한 모든 변수는 code가 실제로 이동하진 않지만 최상위로 끌어올려진 것과같이 동작한다. = hoisting
// 하지만 console.log에서는 undefined가 나타나는데, 선언은 hoisting 하나 할당은 hoisting 하지 않음. 

// 2. let과 const 도 hosting 되지만 Error occured 이유.

// hoisting : Scope 내부 어디에서든 variable 선언은 최상위에 선언한 것과 같이 행동함.
// let , const 는 Temporal Dead Zone 의 영향을 받음.

// 2.1 ex)
// console.log(name);
// const name = `Mike` // 함수 선언 및 할당
// console.log(name) // 사용 가능
// 결과 : cannot access `name` before initialization.
 // 할당을 하기 전에는 사용할 수 없음. 이는 code를 예측 가능하게 하고 잠재적인 bug를 줄일 수 있음.

// 2.1.1 ex)
// let age = 30;
// function showAge(){
//   console.log(age);
//    let age = 20;
// }
// showAge();
// function 문 안의 let으로 인해 error , 이는 hoisting 되지 않아 발생하는문제가 아님. 
// hoisting은 scope 단위로 일어나는데, hoisting이 되지 않았을 경우 첫번째 선언한 age변수가 실행되어야 함. 
// TDZ 안의 두번째 선언한 age가 hoisting 되었기 때문에 error가 발생하는 것.


// 3. 변수의 생성과정 
//    1) 선언 단계 
//    2) 초기화 단계
//    3) 할당 단계 
// 3.1 var는 선언과 초기화가 동시에 됨.  # 초기화 : undefined를 할당 해주는 단계

// 3.2. let은 선언단계와 초기화 단계가 분리되어서 실행 됨.  -> 초기화 단계는 실제 코드에 도달하였을 때 실행되기 때문에 
// reference error 가 발생함. 

// 3.3 const는 선언 , 초기화 , 할당이 동시에 되어야 함. 
// let , var는 선언만 해 두고 나중에 할당하는것을 허용 함. var , let = 변수값 변경이 가능 , const 변경불가한 변수 

// ex)
// let name;
// name = `Mike`;
// var age;
// age = 30;
// const gender; 
// gender = `male`;
// 결과 : syntaxError : Missing initializer in const delaration. : 71 선언하면서 바로 할당하지 않았기 때문. 
  

// 4. Scope 
// var : 함수 스코프 (function-scoped)
// let, const : 블록 스코프(block-scoped)
  // 블록 스코프는 모든 코드 블록 내에서 선언된 변수는 코드 블록 내에서만 유효하며 외부에서는 접근할 수 없음. 
    // 즉 코드블록 내에서 선언한 변수는 지역변수임.
    // 여기서 말하는 코드 블록은 : 함수, if문, for문 , while문, try/catch 문 등이 있음. 

// 반면 함수 스코프는 함수 내에서만 선언된 변수만 그 지역 변수가 된다는 의미임. 
// ex.1) 
// const age = 30; 
// if(age>19) {
//   var txt = `성인`;
// }
// console.log(txt); // '성인'
// if 문에서의 var는 지역변수가 아니기 때문에 블록 외에서도 접근 가능함.
// ex.2)
// function add(num1, num2){
//   var result = num1 + num2;
// }
// add(2,3);
// console.log(result);
// uncaught ReferenceError : result is not defined
// function문 안에서의 var은 지역변수이므로 블록 외부에서 접근 불가.
// var 이 유일하게 벗어날 수 없는 scope가 function 이라고 생각하면 됨. 



// # 2.  생성자 함수
// let user = {
//   name : `Mike`,
//   age  : 30; 
// }  - > 객체 리터럴

// 만일 이와같은 객체 리터럴을 같은 형식으로 다수 생성해 내야 할 경우. = 생성자 함수를 사용
 // 생성자 함수는 보통 첫 글자를 대문자로 해서 함수를 만들어 줌. 
// function User(name, age){
//  this.name = name;
//   this.age = age;
// }
//  let user1 = new User(`Mike`, 30);
//  let user2 = new User(`Jane`, 22);
//  let user3 = new User(`Tom`, 17); 
// console.log(user1);
// console.log(user2);
// console.log(user3); 

// & 생성자함수의 작동방식
// function User(name,age){
//   this = {}  // -> 1. 빈 객체를 생성하고 this에 할당한다. 
  
//   this.name = name; // 
//   this.age = age; // -> 2. 함수문들을 실행하면서 this의property들을 추가한다.
//   return this;   // -> 3. this를 반환한다. 
// }
// new 함수명(); // -> 4. new를 붙여 실행할 때마다 위의 알고리즘으로 동작한다.

// 예제 - method 추가법

 // function User(name, age){
 //   this.name = name;
 //   this.age = age;
 //   this.sayName = function(){
 //    console.log(this.name);
 //   }
 // }
 // let user5 = new User(`Han`, 40);
 // user5.sayName();

// 생성자 함수 : create product

// function Item(title,price){
//   // this = {}; -> 이 구문은 보이지 않게 실행됨.
//   this.title = title;
//   this.price = price;
//   this.showPrice  
// }


// 생성자 함수 : 상품 객체 생성

//  function Item(title, Gsm, Size, Type, price){
//     this.title = title;
//     this.price = price;
//      this.Gsm = Gsm
//      this.Size = Size
//      this.type = Type
//      this.showPrice = function(){
//         console.log(`가격은 ${price}원 입니다.`);

//     }

   //  return this; -> 이 구문은 보이지 않게 실행됨.
// }

//  const item1 = new Item('Mr.Copy',`75g`,`A4`,`2500매`,`12,300`);
//  const item2 = new Item('Mr.Copy',`75g`,`A3`,`2500매`,`31,000`);
//  const item3 = new Item('Mr.Copy',`75g`,`A3`,`1250매`,`16,000`);
//  const item4 = new Item('Mr.Copy',`75g`,`B4`,`2500매`,`23,000`);
//  const item5 = new Item('Mr.Copy',`75g`,`B5`,`2500매`,`11,500`);
//  const item6 = new Item('Mr.Copy',`80g`,`A4`,`2500매`,`13,300`);
//  const item7 = new Item('Mr.Copy',`80g`,`A3`,`2500매`,`33,000`);

//  console.log(item1,item2,item3,item4,item5,item6,item7);

// item7.showPrice();


// #3. Computed property

// 3.1 예시
//let a = `age`;

// const user = {
//   name : `Mike`,
//   age : 30 // or [a] : 30  -> 으로 사용해도 됨. 이를 Computed property 라고 함.
// }

// 3.2 예시
// const user = {
//   [1 + 4] : 5,
//  ["안녕"+`하세요`] :`Hello`
// }

//console.log(user)
// user <- {5:5, 안녕하세요 : `Hello`};

// #3.1 Methods

// # 3.1.1 Object.assign()
// # 3.1.2 Object.keys()
// # 3.1.3 Object.values()
// # 3.1.4 Object.entries()
// # 3.1.5 Object.fromEntries()


// #3.1.1 Object.assign(): 객체 복제

 // const user = {
 //  name : `Mike`,
 //   age : 30
 // }
//  const cloneUser = user; 
// cloneUser.name = `Tom`

// console.log(cloneUser)
// console.log(user)
// 이와같이 할 경우 객체 복제가 아닌, 참조값 주소만 두 변수로 접속되는것. 
// -> cloneUser - 변수값 건드릴 시 user 변수값도 변경됨.


// 동일하게 복제하기 위해서는 Object.assign() Method 를 사용해야 함.

// const user = {
// name : `Mike`,
//  age : 30
// }
//const newUser = Object.assign({},user); // 여기서의 빈 객체는 초기값, 두 번째 매개변수부터 들어오는 객체들이 초기값과 병합됨.
//newUser.name = `Tom`

//console.log(user);
//console.log(newUser);

// {} + {name : `Mike` , age : 30 } = 
// {name : `Mike`, age : 30}
// 결과 : user != newUser 

// # 추가 1. Object.assign({},user) 에서 {} 안에 { gender : `male` } 값 추가시 성별값만 있는 객체에 user 객체 안 
// property 가 합산된 객체를 생성함.
// # 추가 2. Object.assign({},user) 에서 {} 안에 값 추가 중 key 가 같은 property가 존재 할 시 덮어쓰게 됨.
// # 추가 3. Object.assign 으로 2개 이상의 객체를 합 할 수 있음. 
// # 추가 3의 예시.

// const user = {
//   name : `Mike`
// }
// const info1 = {
//   age : 30
// }
// const info2 = {
//   gender : `male`
// }
// Object.assign(user, info1,info2);
// console.log(user);
// 결과 : user 값에 info1,info2의 property 붙음.

// # 3.1.2 Object.keys() : 키 배열 반환

// const user = {
//   name : `Mike`,
//   age : 30,
//   gender : `male` 
// }
// console.log(Object.keys(user));
            
// # 3.1.3 Object.values() : 값 배열 반환

// const user1 = {
//   name : `Mike`,
//   age : 30,
//   gender : `male` 
// }
// console.log(Object.values(user1));
            
// # 3.1.4 Object.entries() : 키/값 배열 반환
// const user = {
//   name : `Mike`,
//   age : 30,
//   gender : `male`,
// }
// console.log(Object.entries(user));


// # 3.1.4 Object.fromentries() : 키/값 배열을 객체로
// const arr =
//      [
//        [`name`,`Mike`],
//        [`age`,30],
//        [`gender`,`male`]
//      ];
// console.log(Object.fromEntries(arr));

// let n = "name";
// let a = "age";

// const user =   {
//  [n] : "Mike",
//    [a] : 30,
//    [1 + 4] : 5,
// };
// console.log(user);



// function makeObj(key , val){
//    return{
//        [key] : val
//    };
// }

// const obj = makeObj('나이',33);;

// console.log(obj)   
// 어떤것이 key로 올지 모르는 객체를 만들 때에 유용함.



// const user = {
//     name : "Mike",
//     age : 30,
// };

// const user2 = Object.assign({},user) 
// user2.name = 'Tom';

 
// console.log(user);
// console.log(user2);

// const user = {
//     name : "Mike",
//     age : 30,
// };

// const result = Object.keys(user);
// const result2 = Object.values(user); 
// const result3 = Object.entries(user);

// console.log(result);
// console.log(result2);
// console.log(result3);

//  let arr =  [
//   ['mon', '월']
//   ['tue','화']
//   ]

// const result4 = Object.fromEntries(arr);

// console.log(result4);


l(심볼)
// property key : 문자형
// 심볼은 유일한 식별자를 만들기 위해 사용한다.

// const a =Symbol();
// const b =Symbol();

// console.log(a);
// console.log(b);

// consequense : Symbol(), Symbol() - > Symbol()===Symbol() false , Symbol()==Symbol() false
// console.log(a===b);
// console.log(a==b);

// const id = Symbol(`id`);
// const id2 = Symbol(`id`);
// console.log(id);
// console.log(id2);

// console.log(id===id2);
// console.log(id==id2);
// consequense : Symbol(id), Symbol(id2) - > Symbol(id)===Symbol(id2) false , Symbol(id)==Symbol(id2) false

// const id = Symbol(`id`);
// const user = {
//   name : `Mike`,
//   age : 30,
//   [id] : `myid`
// }
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
  

// Symbo.for() : 전역 심볼
// 1. 하나의 심볼만 보장받을 수 있음. 
// 2. 없으면 만들고, 있으면 가져오기 떄문
// 3. Symbol 함수는 매번 다른 Symbol 값을 생성하지만, 
//    Symbol.for 메소드는 하나를 생성 한 뒤 키를 통해 같은 Symbol을 공유

// const id1 = Symbol.for(`id`);
// const id2 = Symbol.for(`id`);

// console.log(id1==id2);
// console.log(id1===id2);

// console.log(Symbol.keyFor(id1));
 
// const id = Symbol(`id 입니다.`);
// console.log(id.description);


// const id = Symbol(`id`);
// const user = {
//   name : `Mike`,
//   age :30,
//   [id] : `Myid`
// };
// console.log(Object.getOwnPropertySymbols(user));
// console.log(Reflect.ownKeys(user));


// 다른 개발자가 만들어 놓은 객체

// const user = {
//   name : "Mike",
//  age : 30,
// };

// 내가 작업

// user.showName = function () {};
// const showName = Symbol("show name");
//  user[showName] = function () {
//    console.log(this.name);
//  };

// user[showName]();


// 사용자가 접속하면 보는 메세지 
// for (let key in user){
//   console.log(`His ${key} is ${user[key]}.`);
// } 


// # 5. Number , Math 
// 10진수 -> 2진수/ 16진수 
// let num = 10;
// console.log(num.toString());
// console.log(num.toString(2));  

// let num2 = 255;

// console.log(num2.toString(16));  
// PI
// console.log(Math.PI);
// 올림
// console.log(Math.ceil(5.1));
// console.log(Math.ceil(5.7));
// 내림
// console.log(Math.floor(5.1));
// console.log(Math.floor(5.7));
// 반올림
// console.log(Math.round(5.1));
// console.log(Math.round(5.7));

// 소수점 자릿수
// let userRate = 30.1234;

// console.log(Math.round(userRate*100)/100);

// console.log(userRate.toFixed(2));
// console.log(userRate.toFixed(0));
// console.log(userRate.toFixed(6));
 // 결과 : 30.12 , 30 , 30.123400 = 문자열로 반환된 값이으로 숫자로 변환하여야 함.
// console.log(Number(userRate.toFixed(2)));

// isNaN = NaN인지 아닌지 판단, isNaN == isNaN - false , isNaN 만이 NaN인지 아닌지를 판단함. 
// let x = Number(`x`); // NaN
// console.log(x==NaN);
// console.log(isNaN(x));


// let margin = `10px`;
// console.log(parseInt(margin)); // 10
// console.log(Number(margin));  // NaN
// parseInt - 숫자와 문자가 혼합되어 있는 경우에 숫자가 있는곳 까지 읽어서 반환.

// let redColor = `f3`;
// console.log(parseInt(redColor));
// console.log(parseInt(redColor,16));
// console.log(parseInt('11',2));


// # parseFloat() : paseInt 와동일하나 부동소수점을 반환

// let padding = '18.5%';
// console.log(parseFloat(padding));
// console.log(parseInt(padding));

// Math.random() = rand 값 
// Math.max() = 값들 중 최대값
// Math.min() = 값들 중 최소값
// Math.abs() = 값의 절대값
// Math.pow() = n의 m승값.
// Math.sqrt() = 제곱근

// console.log(Math.floor(Math.random()*100)+1);
// console.log(Math.max(1,4,-1,5,10,9,5.54));
// console.log(Math.min(1,4,-1,5,10,9,5.54));
// console.log(Math.abs(-5.54));
// console.log(Math.pow(2,10));
// console.log(Math.sqrt(16));



// # 문자열 

// " " , '' , ` ` 


// let html = '<div class="box_title">제목 영역</div>';

// let desc = "It's 3 o'clock.";

// let name = 'Mike';
// let result = `My name is ${name}.`
// let add = `2 더하기 3은 ${2+3}입니다.`

// console.log(html,desc,name,result,add);

//  let desc = `오늘은 맑고 화창한 
//  날씨가 계속 되겠습니다.
//  내일은 비소식이 있습니다.`;
// let desc = '오늘은 맑고 화창한\n날씨가 계속 되겠습니다.';


// console.log(desc);

// let desc = '안녕하세요.';
// console.log(desc.length);
// console.log(desc[2]);
// 특정한 글자를 변환할 수 없음.


// 대,소문자 변환
// let desc = "Hi guys. Nice to meet you.";
// console.log(desc.toUpperCase());
// console.log(desc.toLowerCase());

// 문자를 인수로 받아 몇 번째에 위치하는지 알려줌
// 0부터 세기 때문에 첫 문자가 0 으로 나옴. 필요시 >-1 ;


// let desc = "Hi guys. Nice to meet you.";
// console.log(desc.indexOf(`to`));
// console.log(desc.indexOf(`man`)); // 찾는 문자가 없을경우 -1을 반환

// if(desc.indexOf('Hi')> -1){
//   console.log('Hi가 포함된 문장입니다.');
// }
// 첫 문자의 위치를 0으로 반환하므로 -1보다 큰가? 구문을붙여 일반적으로 사용.



// str.slice(n,m) : n부터 m 까지의 문자열을 반환함.
// m 은 없으면 문자열 끝까지, 양수는 그 숫자까지(포함하지 않음), 음수는 끝에서부터

/* let desc = "abcdefg";
  console.log(desc.slice(2));
 console.log(desc.slice(0,5));
  console.log(desc.slice(2,-2));
*/  

/* && = and , || = or

let id = prompt(`아이디를 입력해주세요.`)
const password = prompt(`비밀번호를 입력해주세요`);

if((id===`egoing`|| id===`k8805`|| id===`qkrekgka2003` || id===`oceansprogram`) && password===`1111111`);
{
  alert(`반갑습니다`+ id +`님! 인증되었습니다.`);
} else {
  alert(`아이디 인증에 실패했습니다.`);
}/*
	let i = 0;
	while(i<10){
	document.write("Coding everybody" +i+" <br />");
	i= i + 1;
}
*/
/*
for(var i = 0; i < 10; i++){
  for(var j = 0; j<10; j++){
    document.write("Coding everybody" +i+j+ '<br />');
  }
}
function numbering(){
  document.write(1);
}
numbering();
function numbering(){
  i = 0 ;
  while(i < 20) {
    document.write(i+"<br / >");
    i += 1;
  }
}
numbering();
numbering();
numbering();
numbering();
numbering();
numbering();

function get_member1() {
  return `egoing`;
}

function get_member2() {
return `k8805`;
}	
alert(get_member1());
alert(get_member2());
/*
  function get_member1(){
    return `egoing`;
    return `leezche`;
    return `graphittie`;
  }
  alert(get_member1());
  }
  결과 : `egoing` 출력받고 끝.
  */
/*
  function get_argument(arg) {
    return arg*1000;
   }
 alert(get_argument(1));
 alert(get_argument(2));
 
 function get_arguments(arg1, arg2) {
  return arg1 + arg2;
}

alert(get_arguments(10, 20));	
alert(get_arguments(20, 30));


numbering = function () {
  i = 0;
  while(i < 10){
    document.write(i);
    i += 1;
  }
}

numbering();


function get_members() {
	return [`egoing`,`k8805`,`sorialgi`];
}
let members = get_members();
document.write(members[0]);
document.write(members[1]);
document.write(members[2]);


// 10월 18일
/* /*	numbering = function () {
		i = 0;
		while(i < 10){
			document.write(i);
			i += 1;
		}
	}

numbering();
*/
/* function get_members() {
	return [`egoing`,`k8805`];
}
let members = get_members();


for(let i = 0; i < members.length; i++){
	document.write(members[i].toUpperCase()+"<br />");

}
*/
/*
var i = 0;
while(i < 10 ){
	document.write(`Coding everybody`+i+`<br />`);
	i=i+1;
}

for(var i = 0; i < 10; i = i+1){
	document.write(`Coding everybody`+i+`<br />`);
} 
*/  
/*	numbering = function () {
		i = 0;
		while(i < 10){
			document.write(i);
			i += 1;
		}
	}

numbering();
*/
/* function get_members() {
	return [`egoing`,`k8805`];
}
let members = get_members();


for(let i = 0; i < members.length; i++){
	document.write(members[i].toUpperCase()+"<br />");

}
*/
/*
var i = 0;
while(i < 10 ){
	document.write(`Coding everybody`+i+`<br />`);
	i=i+1;
}
*/
/*
for(var i = 0; i < 10; i = i+1){
	document.write(`Coding everybody`+i+`<br />`);
} 
*/
/*
for(var i = 0; i < 1000; i++){
	document.write(`coding everybody`+(i*2)+`<br />`);
}

for(var i = 0; i < 10 ; i++){
	if(i === 5) {
		continue;
	}
	document.write(`codingeverybody`+i+`<br />`);
}

for(var i = 0; i < 10 ; i++){
	if(i === 5) {
		break;
	}
	document.write(`codingeverybody`+i+`<br />`);
}

for(var i = 0; i < 10 ; i++){
	for(var j = 0; j < 10 ; j++){
	document.write(`codingeverybody`+i+j+`<br />`);	
	}
}


function numbering(){
	document.write(1); 
}
numbering();

/* 배열과 반복문을 결합하기 
 	function get_members() {
		return [`egoing`,`k8805`,`sorialgi`,`leezhe`];
	}
	members = get_members();
document.write(members[0].toUpperCase()+`<br />`);
document.write(members[1].toUpperCase()+`<br />`);
/*	function get_members() {
		return [`egoing`,`k8805`,`sorialgi`,`leezhe`];
	}
	members = get_members();
document.write(members[0].toUpperCase()+`<br />`);
document.write(members[1].toUpperCase()+`<br />`);

function get_members() {
	return [`egoing`,`k8805`];
}
members = get_members();
for(i ; i < members.length; i++ ) {
document.write(members[i].toUpperCase()+`<br />`);
}
*/




/* 배열의 제어

배열의 꼬리에 하나 집어넣기 = push 

배열의 꼬리에 배열 집어넣기 = concat

배열의 머리에 추가하기 = unshift

배열의 중간에 뭔가를 삭제하고 필요한만큼 끼워넣을때 = splice
*/

let li = [`a`,`b`,`c`,`d`,`e`];
li.push(`f`);
console.log(li);
li.unshift(`z`);
console.log(li);

<ul>
<script type="text/javascript">
var grades = ['egoing' : 10, 'k8805' : 6, 'sorialgi' : 80];
for(var name in grades) {
	document.write("<li>key : "+ name +"value : "+grades[name]+"<li>")
	}
</script>
</ul>	
 
 /*	numbering = function () {
		i = 0;
		while(i < 10){
			document.write(i);
			i += 1;
		}
	}

numbering();
*/
/*
function get_members() {
	return [`egoing`,`k8805`,`sorialgi`, `leezche`];
}
let members = get_members();


for(let i = 0; i < members.length; i++){
	document.write(members[i].toUpperCase()+"<br />");

}
*/


/* 객체에 데이터와 연관있는 함수 같이 넣고 처리. : 객체지향 프로그래밍
let grades = {
	'list' : {'egoing' : 10, 'k8805': 8, 'sorialgi' : 80},
	'show' : function(){
		for(let name in this.list){
			console.log(name, this.list[name]);
		}
		console.log(this.list);
	}
}
grades.show();
 


## 모듈 : 프로그램을 구성하고 있는 로직들을 재사용 할 수 있는 단위로 조각내어 
          구획화를 시켜서 또 다른 프로그램의 부품으로 사용하는 것.
		  1. 자주 사용하는 코드를 별도의 파일로 만들어서 필요할 때마다 재활용 가능.
		  2. 코드를 개선하면 이를 사용하고 있는 모든 애플리케이션의 동작이 개선됨.
		  3. 코드 수정시에 필요한 로직을 빠르게 찾을 수 있다.
		  4. 필요한 로직만을 로드해서 메모리의 낭비를 줄일 수 있다.
		  5. 한번 다운로드된 모듈은 웹브라우저에 의해서 저장되기 때문에 동일한 로직을
		     로드 할 때 시간과 네트워크 트래픽을 절약 할 수 있다.



<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<script src="greeting.js"></script>
	<title>(주)삼지페이퍼</title>
</head>
<body>
<script>

		alert(welcome());
</script>
</body>
</html>

*/ 
/* application programing interface 와 UI의 차이
UI - 버튼 조작 등의 편의성이 있는 화면
API - chrome , windows, firefox , internetexplorer , 


var pattern = /a./; , . : 1 문자 

### 

var xi = /a/;
undefined
"Abcde".match(xi);
null
var oi = /a/i;
i 의 용법 : 대 소문자 구분없이 목표 문자열 찾아냄


undefined
"Abcde".match(xi);
null
"Abcde".match(oi);
['A', index: 0, input: 'Abcde', groups: undefined]
var ig= /a/ig;
g 의 용법 : 문자열 내 포함된 모든 목표 찾아냄


undefined
"AabcdAa".match(ig);
(4) ['A', 'a', 'A', 'a']

*/

var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content = '생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다. ';
var result = content.replace(urlPattern, function(url){
    return '<a href="'+url+'">'+url+'</a>';
});
console.log(result);
 

/* local variable , global variable


var vscope = 'global';
function fscope(){
	alert(vscope);
}
function fscope2(){
	alert(vscope);
}

fscope();
fscope2();

상기 함수는 전역 접근이 가능한 전역변수입니다. 

var vscope = 'global';
function fscope(){
	let vscope = 'local';
	let lv = 'local variables';
	alert(lv);
}

fscope();
alert(lv);

상기 alert(lv)는 undefined , lv는 지역변수로 선언되었기 때문.

var vscope = 'global' ; 
function fscope() {
	 var vscope = 'local';
}
fscope();
alert(vscope);

  =  global

var vscope = 'global' ; 
function fscope() {
	vscope = 'local';s
}
fscope();
alert(vscope);

  = local 

  var을 빼고 선언할 경우 전역의 vscope 를 변경

  var vscope = 'global' ; 
function fscope() {
	var vscope = 'local';
	vscope = 'local';
}
fscope();
alert(vscope);

  = global

   지역변수 내에 vscope 있는경우 우선 지역변수 내에 같은 변수가 있는지 확인, 변경하므로
   변경은 지역변수 내에서 이루어 짐. 
   전역변수 변화 되지 않음. 



   // 전역변수를 전혀 사용하고 싶지 않을 때.


   (function(){
	 var MYAPP = {}
	 MYAPP.calculator = {
	 	'left'  : null,
	 	'right' : null
	 }
	MYAPP.coordinate = {
		'left' : null,
		'right' : null
	}

	MYAPP.calculator.left = 10;
	MYAPP.calculator.left = 20;
	function sum() {
			return MYAPP.calculator.left + MYAPP.calculator.right;
	}
	document.write(sum());
}())

// 최초 i 가 사용될 때 	

	var i = 5;

	function a() {
		var i = 10; 
		b();
	}

	function b(){
		document.write(i);
	}

	a();
*** 전역 i = 5 잡힌상태에서 함수 a가 지역 i = 10 을 두고 함수 b를 호출,
    함수 b가 i를 출력, b 내부에 지역변수가 존재하지 않기에 전역변수를 찾음, 
	최초 호출자 함수인 a 에서 지역변수를 찾지 않고 전역변수를 찾음.

	정의 될때의 전역변수가 사용된다. 
	lexical scope / static scope  / 정적 유효범위라고 함.



자바스크립트는 함수의 중괄호 안에서 전역설정된 변수만이 지역변수가되고 for if 문 안에서 선언된 
변수는 지역변수의 의미를 같지 않고 전역변수로 설정된다.

JavaScript에서는 함수도 객체이다. 다시말해서 일종의 값이다. 
거의 모든 언어가 함수를 가지고 있다. 

var a = "value" = value 가 값이기때문에 a 안에 담을 수 있음. 
		JavaScript에서는 함수 자체가 값이 될 수 있음.


a = {
	b: function(){
	}
}
key가 변수와 같은 역할을 하는것을 속성, property
	그 property 안에 담긴것이 함수일 경우 method라고 표현.


	함수는 값이기 때문에 다른 함수의 인자로 전달 될수도 있다.
	
	function cal(func,num){
		return func(num)
	}
	function increase(num){
		return num+1
	}
	function decrease(num){
		return num-1
	}

	alert(cal(increase,1));
	alert(cal(decrease,1));
	
	함수는 함수의 리턴 값으로도 사용할 수 있다.
	
	function cal(mode){
	var funcs = {
		'plus' : function(left, right) {return left + right},
		'minus' : function(left, right) {return left - right}
				}
	return funcs[mode];
	}
alert(cal('plus')(2,1));
alert(cal('minus')(2,1));

	당연히 배열의 값으로도 사용할 수 있다.

	var process = [
	function (input) { return input + 10;},
	function (input) { return input * input;},
	function (input) { return input / 2;}
];
var input = 1;
for(var i = 0 ; i < process.length; i++){
	input = process[i] (input);
}
alert(input);
 *** consequence : 60.5
 함수의 사용용도 : 변수 , 매개변수 , 리턴값 
 이러한용도의 데이터를 사용 할 수있는 형태의 데이터를
	first class citizen 
	first class object
	first class values 라고 함.



	* 콜백 
	값으로 사용 될 수 있는 특성을 이용하면 함수의 인자로 함수로 전달할 수 있다.
	값으로 전달된 함수는 호출될 수 있기 때문에 이를 이용하면 함수의 동작을 완전히 바꿀 수 있다.
	인자로 전달된 함수 sortNumber의 구현에 따라서 sort의 동작방법이 완전히 바뀌게 된다. 
	어떠한 함수가 수신하는 인자가 함수인 경우를 콜백이라고 함.


	var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];
	numbers.sort();
	-------  == 
	   ㄴ---------------> 객체(배열)
	         ㄴ---------> 메소드, 

	var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];
	var sortfunc = function (a, b) {
			console.log(a, b);
			if(a > b){
					return 1;
			}	else if (a < b){
					return -1;
			} else{
					return 0;
			}
	}
	
	console.log(numbers.sort(sortfunc));

	결과 : 1,2,3,4,5,6,7,8,9,10,20
	** return 값을 어떤것으로 하느냐에 따라서 정렬 순서를 정함.
	   상기 문법을 간략화 하면 

	   var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];
	var sortfunc = function (a, b) {
			return a - b; 

	}		
	console.log(numbers.sort(sortfunc));



	*** 비동기 처리
	만약 홈페이지에 약 10000 명의 구독자가 있고 10000명에게 이메일을 작성한다고 하면, 
	글 작성, 전송에 오랜 시간이 걸림. 
	글 작성 -> 발송 -> 작성완료 - 3시간이 걸린다고 한다. = > 동기적 처리. 순서대로 실행.
	글 작성 -> 이메일발송예약 -> 작성완료 - 바로 완료. = > 비동기적 처리. 
	   ㄴ> 내부적으로 사용자에게 노출되지 않는 프로그램이 반복해서 동작하며 
	       이메일 발송예약이 들어갔는지 확인만 백그라운드에서 진행 시킴. 
		   웹 브라우저와 서버가 백그라운드에서 동작하는것을 Ajax(비동기 처리) 라고 함.
	1. Ajax
		Asynchronous : 비동기적인
		Javascript   : 자바
		And
		XML			 : 사용 안함


	*** 클로저
	내부함수가 외부함수의 맥락(context)에 접근할 수 있는것을 말함.
	자바스크립트를 이용한 고난이도의 테크닉을 구사하는데 필수적인 개념.
	

			function outter() {
			function inner() {
				var title	= 'coding everybody';
				alert(title);
			}
			inner();
		}
	outter();
	
	클로저는 외부함수가 더이상 사용되지 않는 경우에도 내부함수가 
	외부함수에 접근할 수 있다.

			function outter() {
				var title	= 'coding everybody';
				return function() {
				alert(title);					
				}
			}
	inner = outter();
	inner();
	return을 받아 외부함수가 종료되었음에도 접근이 가능함.
	*/

// *** private variable	

function factory_movie(title) {
	return{
		get_title : function (){
			return title;
		},
		set_title : function(_title) {
			if(typeof _title === 'string'){
					title = _title		
			} else {
					alert('제목은 문자열이어야 합니다.');
		}
	}
}
}

ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('matrix');
alert(ghost.get_title());
alert(matrix.get_title());
ghost.set_title(1);
alert(ghost.get_title());
alert(matrix.get_title());

/* *** 클로저의 응용 

	var arr = []
	for(var	i = 0; i < 5; i++){
		arr[i] = function() {
			console.log(i);
		}
	}
	for(var index in arr) {
		console.log(arr[index]());
	}
	0 , 1 , 2 , 3 , 4 가 나오길 바람 
	결과 55555 

		var arr = []
	for(var	i = 0; i < 5; i++){
		arr[i] = function() {
			return i;
		}
	}
	for(var index in arr) {
		console.log(arr[index]());
	}
	같은 결과.

		var arr = []
	for(var	i = 0; i < 5; i++){
		arr[i] = function(id) {
			return function() {
			return id;
		}
	}(i);
}
	for(var index in arr) {
		console.log(arr[index]());
	}

	0,1,2,3,4 
	(i); 로 외부함수 즉시호충, 인자로 i 값 참조.


	*** arguments
	arguments라는 변수에 담긴 숨겨진 유사배열.
	이 배열에는 함수를 호출할 때 입력한 인자가 담겨있다.
	*/
	function sum() {
		var i, _sum = 0;
		for(i = 0; i < arguments.length; i++){
			document.write(i+' : '+arguments[i]+'<br / >');
			_sum += arguments[i];
		}
	return _sum;	
	}
document.write('result : ' + sum(1,2,3,4));

/* function a(arg){
}
sum()  - > 매개변수가 없음.
a(1) - > 1(값) 은인자 , arg1 -> arg(변수) 매개변수,parameter
arguments.length 는 인자의 수 

*** 매개변수의 수
	argument.length는 함수에 정의된 인자의 갯수, 
	함수.length 는 실제 인자의 갯수 
*/
 	function zero() {
			console.log(
					'zero.length', zero.length,
					'arguments', arguments.length
					);
		}
zero(); // zero.length 0 arguments 0


		function one(arg1){
		console.log(
				'one.length', one.length,
				'arguments', arguments.length
				);
		}
one('val','val2'); // one.length 1 arguments 2

		function two(arg1, arg2){
		console.log(
				'two.length', two.length,
				'arguments', arguments.length
				);
		}
two('val'); // two.length 2 arguments 1



/// *** 함수의 호출
	// 함수를 호출하는 기본적인 방법.
	function sum(arg1,arg2){
		return arg1+arg2;
	}
sum(1,2); // 3
sum(3,5); // 8
sum.apply();{[nativecode]};
sum.apply(null, [1,2]); // 3
sum.apply(null, [3,5]); // 3

// apply를 사용하는 구체적인 이유? 

o1 = {val1:1, val2:2, val3:3}
o2 = {v1:10 , v2:50, v3:100, v4:25}
function sum() {
	var _sum = 0;
	for(name in this){
		_sum += this[name];
	}
	return _sum;
}
alert(sum.apply(o1))
alert(sum.apply(o2))
// 6 185
function sum() {
	var _sum = 0;
	for(name in this){
		if(typeof this[name] !== 'function')
			_sum += this[name];
	}
	return _sum;
}
	o1 = {val1:1, val2:2, val3:3, sum:sum}
	o2 = {v1:10 , v2:50, v3:100, v4:25, sum:sum}

alert(o1.sum());
alert(o2.sum());
// alert(sum.apply(o1))
// alert(sum.apply(o2))



   /* *** 객체 지향 프로그래밍
		OOP(Objct Oriented Programming)
		프로그램을 구성하고 있는 로직을 상태와 행위로 구분해서
		서로 연관되어 있는 객체로 만들어내는것을 말함.
		
		그룹핑 되어있는 변수와 메소드들을 객체로 모아둔 것

	문법과 설계	

	문법

	객체지향을 편하게 할 수 있도록 언어가 제공하는 기능을 익히는것.
	추상화(abstract) : 소프트웨어로 단순화 해 나가는 과정

	부품화 
	 

	*** 객체 생성
	 객체 내의 변수를 프로퍼티(property) , 함수를(method)라고 한다.
*/
	  var person = {}
	 person.name = 'egoing';
	 person.introduce = function() {
	 return 'My name is ' + this.name;
	}
	document.write(person.introduce());
// 객체 생성이 분리되어 있다. 코드를 합치면

	var person = {
		'name' : 'egoing',
		'introduce' : function() {
		return 'My name is ' + this.name;
		}
   }
	   document.write(person.introduce());

// 와 같은 모양으로 나옴. 만약 여러 사람에 대한 객체를 만들어
// 낸다고 하면, 
	var person1 = {
		'name' : 'egoing',
		'introduce' : function() {
		return 'My name is ' + this.name;
		}
	}
	document.write(person.introduce());

		var person2 = {
		'name' : 'leezche',
		'introduce' : function() {
		return 'My name is ' + this.name;
		}
	}
	document.write(person.introduce());
	/* 와 같이 쓰면 되지만, introduce 절 중복이 발생함. 
	   생성자, new 함수를 통해 중복을 없엘 수 있음.
	
	   *** 생성자

	   생성자(constructor)는 객체를 만드는 역할을 하는 함수다.
	   자바에서 함수는 재사용 가능한 로직의 묶음이 아니라 객체를
	   만드는 창조자라고 할 수 있다. */
	   	function person(){}
	var p0 = person();
	// p0 = undefined 
	var p = new person();
	// p = person{}
	// 비어있는 객체에 창조함. 
	// 함수에 new를 붙이면 그 리턴값은 객체가 된다. 

	function person() {}
	var p = new person();
	p.name = 'egoing';
	p.introduce = function() {
		return 'My name is '+this.name;
	}
	document.write(p.introduce());

	//

	function person() {}
	var p1 = new person();
	p1.name = 'egoing';
	p1.introduce = function() {
		return 'My name is ' +this.name;
	}
	document.write(p1.introduce()+"<br / >");
   
	 function person() {}
	var p2 = new person();
	p2.name = 'leezche';
	p2.introduce = function() {
		return 'My name is ' +this.name;
	}
	document.write(p2.introduce()+"<br / >");

	/* 1424~1426 , 1432~1434 가 똑같은 역할을 하고 있는 코드임에도
	  불구하고 중복되어 있는 모습을 볼 수 있다.*/


	  function person(name) {
		this.name = name;
		this.introduce = function() {
			return 'My name is '+this.name;
		}
	}
	var p1 = new person('egiong');
	document.write(p1.introduce()+ "<br />");
   
	 var p2 = new person('leezche');
	document.write(p2.introduce()+ "<br />");

	/* 생성자 함수 하나로 객체의 프로퍼티를 정의할 수있고, 
	  이러한 작업들은 초기화라고 한다. 이를 통해서 코드의 재사용성이
	  대폭 높아졌다. 초기화 - init, initialize */


	  /* 전역객체

	  전역객체(Global object)는 특수한 객체다.모든 객체는 이 전역객체의 프로퍼티이다.
*/
function func() {
	alert('Hello?');
}
func(); // alert창 Hello 
window.func(); // alert창 Hello - 결과 같음. 
// window는 전역객체로 작성하지 않고 생략해도 됨. 
// 작성하지 않아도 내부적으로 작성한것과 같음. 
// window라는 전역 객체의 property가 됨.
/* func(); 와 window(); 는 모두 실행된다. 모든 전역변수와 함수는 사실
 window 객체의 property이다. 객체를 명시하지 않으면 암시적으로 window의
  property로 간주된다. */

   var o = {'func':function() {
		alert('Hello?');
	}}
	o.func();
	window.o.func();
	// 자바스크립트에서 모든 객체는 기본적으로 전역객체의 프로퍼티임을 알 수 있다.

	
	// *** 전역객체 API
	/* ECMAScript 에서는 전역객체의 API를 정의해두었다. 그 외의 API는 호스트 환경에서
	 필요에 따라서 추가로 정의하고 있다. 
	 이를테면 웹 브라우저 자바스크립트에서는 alert()이라는 전역객체의 메소드가 존재하지만
	 node.js 에는 존재하지 않는다. 또한 전역객체의 이름도 호스트 환경에 따라서 다른데, 
	 웹 브라우저에서 전역객체는 window이지만 node.js 에서는 global이다. 
	 */


	 //   *** this
	 /* this는 함수 내에서 함수 호출 맥락(context)를 의미한다. 
	 맥락이라는 것은 상황에 따라서 달라진다는 의미인데 즉 함수를 어떻게 호출하느냐
	 에 따라서 this가 가리키는 대상이 달라진다는 뜻이다. 함수와 객체의 관계가 느슨한
	 자바스크립트에서 this 는 이 둘을 연결시켜주는 실질적인 연결점의 역할을 한다.
*/

	 function func(){
    if(window === this){
        console.log("window === this");
		}
	}
 // 함수가 어느 객체에 소속되어 있지 않은 경우에 함수안에서의 this는 
 // 전역객체인 this를 가르킨다.

	// 객체의 소속인 메소드의 this는 그 객체를 가르킨다.

	var o = {
		func : function() {
			if(o === this){
				document.write("o===this");
			}
		}
	}
	o.func();
/*  사실은 func라고 하는 이 함수는 
  window.func 의 window 구문이 생략된 것이으로 
  window.func의 this는 window , o.func 의 this는 o 인 것이다.
  다시말해 ,어떠한 함수의 this를 호출했을 때, 그 this의 값이 window가 
  되는것과 어떠한 객채의 메소드를 호출했을때 그 this의 값이 그 메소드의 소속인
  객체를 가르킨다는 것은 같은 의미인 것이다. */



  // *** 생성자의 호출  
  var funcThis = null;

  function Func() {
	  funcThis = this;
  }
  var o1 = Func();
  if(funcThis === window){
	  document.write('window </br>');
  }
// o1 = func() -> 

  var o2 = new Func();
  if(funcThis === o2){
	  document.write('o2 </br>');
  }



  // *** allpy call 
  // 함수의 메소드인 apply,call을 이용하면 this의 값을 제어할 수 있다.
  
  function sum(x,y){
    return x+y
	};  // 함수 리터럴 

	var sum2 = new Function('x','y','return x+y;');
 // 객체 리터럴 

 var a = [1,2,3]; 
 // 배열 리터럴 


 //  *** 84강.  apply와 this

 var o = {}
 var p = {}
 function func(){
 	switch(this){
 		case o:
 			document.write('o<br />');
 			break;
 		case p:
 			document.write('p<br />');
 			break;
 		case window :
 			document.write('window<br />');		
 			break;
 	}
 }
 func(); // window
 func.apply(o); // o
 func.apply(p); // p 

 // 메소드는 객체 내에 강하게 종속되어 있음 
// 객체(master) / 메소드(slave)
 // javascript 는 종속된 상태에 따라서 메소드 내에 종속되기도 하고 하지 않기도
 // 유연하게 대응함. 

 /// *** 85강  상속(inheritance)

/* 객체는 연관된 로직들로 이루어진 작은 프로그램이라고 할 수 있다.
 상속은 객체의 로직을 그대로 물려 받는 또 다른 객체를 만들 수 있는 기능을 의미한다.
 단순히 물려받는것은 의미가 없고, 기존의 로직을 수정하고 변경해서 파생된
 새로울 객체를 만들 수 있게 해준다.
 로직을 재활용할 수 있게 해줌 */


 function person(name) {
	this.name = name;
	this.introduce = function(){
		return 'my name is ' + this.name;
	}
}
var p1 = new person('egoing');
document.write(p1.introduce()+"<br />"); 

// 위의 코드를 아래와 같이 바꿔보자.

function person(name) {
	this.name = name;
}
person.prototype.name=null;
person.prototype.introduce = function() {
	return 'My name is '+this.name;
}
var p1 = new person('egoing');
document.write(p1.troduce()+"<br />");

/* person 이라는 객체에 prototype 이라는 약속되어 있는 property에 
  method 를  줌. 결과는 같다. 하지만 상속을 위한 기본적인 준비를 마쳤다. 
  이제 상속을 해 보자 */


  /* 상속의 사용 방법 */
  
   function person(name) {
 	this.name = name;
 }
 person.prototype.name=null;
 person.prototype.introduce = function() {
 	return 'My name is '+ this.name;
 }

 function Programmer(name){
 	this.name = name;
 }
 Programmer.prototype = new person();
 
 var p1 = new person('egoing');
 document.write(p1.introduce()+"<br />");

 // 기능의 추가 
 function Person(name) {
    this.name = name;
 }
 Person.prototype.name=null;
 Person.prototype.introduce = function() {
    return 'My nickname is '+this.name;
 }

 function Programmer(name) {
    this.name = name;
 }
Programmer.prototype = new Person();
Programmer.prototype.coding = function() {
    return "hello world";
}

 function Designer(name) {
    this.name = name;
 }

 Designer.prototype = new Person();
 Designer.prototype.Design = function() {
    return "brautiful!";
}


var p1 = new Programmer('egoing');
document.write(p1.introduce()+"<br />");
document.write(p1.coding()+"<br />");

var p2 = new Designer('leezche');
document.write(p2.introduce()+"<br />");
document.write(p2.Design()+"<br />");

// 오리지널 객체를 추가해서 상속객체를 일괄적으로 변경 가능함.



/// *** prototype 프로토 타입 (원형)
/* 이번 수업은 상속수업의 연장선상에 있다. 상속의 구체적인 수단인 
  prototype에 대해서 자세히 알아보자. */
  function Ultra() {}
  Ultra.prototype.ultraProp = true;
  
  function Super() {}
  Super.prototype = new Ultra();
  
  function Sub() {}
  Sub.prototype = new Super();
  
  var o = new Sub();
  console.log(o.ultraProp);


  /* prototype 안에 어떠한 객체를 저장한 후 new를 이용해서 함수를 호출하게 될 경우
  함수는 생성자 함수에 prototype property 에 저장되어있는 객체를 꺼내서 
  그것을 리턴 해 주게 됨. 
  이러한 개념을 prototype chain 이라고 함. 
  */ 

  function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
Super.prototype = new Ultra();

function Sub() {}
Sub.prototype = new Super();
Sub.prototype.ultraProp = 2;

var o = new Sub();

console.log(o.ultraProp);

/* 상기와 같이 짜여진 코드에서는 sub에 ultraprop의 객체가 있으므로
 prototype chain이 일어나지 않고 function sub 안의 데이터 2를 불러옴.*/

 function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
Super.prototype = new Ultra();

function Sub() {}
var s =  new Super();
s.ultraProp = 3;
Sub.prototype = s;


var o = new Sub();

console.log(o.ultraProp); 

// super에 protype 에 저장되어있는 객체읭 Ultra proper의 값이 4 이기 때문에


function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
var t = new Ultra();
t.ultraProp = 4;
Super.prototype = t;

function Sub() {}
var s =  new Super();
Sub.prototype = s;


var o = new Sub();

console.log(o.ultraProp);

/* super에 protype 에 저장되어있는 객체의 Ultra proper의 값이 4 이기 때문에
 console.log 값은 4가 됨. 
  만일 4라고 하는 값도 없에면 Ultra proper의 값은 true로 반환함.
  super의 prototype 조차도 Ultra proper의 값을 가지고 있지 않으면 
 객체에 생성자에 정의되어 있는 ultra proper 값을 조회함. */

 // 유의점, 자식객체에 선언이 부모객체에 영향을 받지 않도록 하여야 함.




 /* 표준 내장 객체(Standard Bullt-in Object) 의 확장
    표준 내장객체는 자바 스크립트가 기본적으로 가지고 있는 객체를 의미한다.
	*/

/* 자바스크립트가 기본적으로 제공하는 객체, 
   이를 통해 엔드유저가 UI를 통해 이용 할 수 있도록 개발자가 새로운 객체를 
   만들어내거나 표준내장객체를 적절히 이용한다. */
   /* Object 
      Function : 함수
	  Array 
	  String  : 문자
	  Boolean 
	  Number 
	  Math
	  Date
	  RegExp (Regular Expression) : 정규표현식

	  기본 자바스크립트가 제공히는 api는 이것이 전부이나
	  자바 스크립트가 동작하는 호스트 환경이 제공하는 api는 이보다 많을 수있다.
	  우리가 자바스크립트를 통해서 브라우저,서버,애플리케이션을 제어할 경우
	  자바 스크립트 코어엔진이 제공하는 API + 호스트 환경이 제공하는 API 를 통해
	  소프트웨어를 창조하는것이다. 
	  코어엔진이 제공하는 API 외에도 사용자가 직접 객체를 정의할 수 있으며
	  이를 사용자 정의 객체라고 한다. 
	  또한 내장 객체에 필요한 기능만을 사용하거나 추가하여 Hybrid 형태로
	  사용 할 수 있다.*/
	  
	  var arr = new Array('seoul','new york','ladarkh','pusan','Tsukuba');
	  function getRandomValueFromArray(arr){
		  var index = Math.floor(arr.length*Math.random());
		  return arr[index];
	  }
	  console.log(getRandomValueFromArray(arr));
	   console.log(arr.length);
 /* 배열의 값 중 랜덤하게 잡아오기. 
  Math.floor = 소숫점 버리기 
  arr.length = 배열의 갯수 구하기. 
  Math.random() = 0~1 rand 값 찾기
  */


  	/*
	  var arr = new Array('seoul','new york','ladarkh','pusan','Tsukuba');
	  function getRandomValueFromArray(arr){
		  var index = Math.floor(arr.length*Math.random());
		  return arr[index];
	  }
	  console.log(getRandomValueFromArray(arr));
*/
Array.prototype.random = function() {
	var index = Math.floor(this.length*Math.random());
	return this[index];
}
var arr = new Array('seoul','new york','ladarkh','pusan','Tsukyba');
console.log(arr.random());

// prototype을 이용해서 코드를 간략화, prototype을 확장하는것을 통해서 
   


/* Object ㅡ Object 객체는 객체의 가장 기본적인 형태를 가지고 있는 객체이다.
   다시 말해서 아무것도 상속받지 않는 순수한 객체다. 
   자바스크립트에서는 값을 저장하는 기본적인 단위로 Object를 사용한다. */
/* Object 의 prototype 은 모든 객체가 가지고 있는 기능.
   
//Object.keys()

	var arr = ["a","b","c"];
	console.log('Object.keys(arr)',Object.keys(arr)); 

//will alert 0,1,2 : 배열 안에 있는 값들이 어떠한 index들을 가지고 있는가에 대한 인덱스들만의 리스트를 만들어서 배열로 리턴하는 메소드. 

	var o = {"name":"egoing","age":20,"city":"seoul"};
	console.log(Object.keys(o));
// 객체가 가지고 있는 키 값만을 수집해서 그 키값을 배열로 만들어서 return하는   	  메소드
/*	Object.keys = function{ ~   
*/


//Object.prototype.toString() 


// toString : 어떠한 객체가 있을 때 그 객체가 담고 있는 어떠한 값이 무엇인가			      보기좋게 보여 주는 메소드.


var o = new Object();
console.log('o.toString()', o.toString());
var a = new Array(1,2,3);
console.log('a.toString()', a.toString());
// prototype이 있는것은 어떠한 객체를 만든후 그 객체를 담고있는 식별자 .   	 	toString

Object.prototype.toString=function () {
// body...
}
/* 어떠한 메소드가 prototype의 소속이라는것은 이 생성자 함수를 이용해서 
new Object라고 실행하는 순간에 어떠한 객체를 만들고 그 객체는 
prototype 이라고 하는 호출한 생성자의 특수한 property에 객체생성.
객체의 메소드로 사용. */



//  *** Object 확장

	Object.prototype.contain = function(needle) {
		for(var name in this){
				if(this[name] === needle){
					return true;
				}
		}
		return false;  
	}
	var o = {'name':'egoing','city':'seoul'}
	console.log(o.contain('grapittie'));  // false
	var a = ['egoing','leezche','grapittie'];
	console.log(a.contain('leezche'));  // true

 // {} 객체 , [] 배열
 // contain : 객체,배열 안에 인자가 있다면 메소드는 true , 없다면 false
 /* Object를 확장하여 모든 객체가 사용할 수 있는 method를 애플리케이션에 추가*/
 // 이러한 방식의 확장은 위험할 수있기 떄문에 신중하여야 한다.

// 왜 위험한가?

/* 코드 작성이 끝난 이후에 console 창에서 
   for(var name in o){
	   console.log(o[name]);
    } 을 찍어보면 함수가 같이 출력되는데, 즉 모든 객체에 영향을 미쳤기 때문.

		for(var name in a){
		console.log(name);
	}
	상기 코드 작성자는 for in 문을 동작시켰을 때 정의한 데이터만 정리될것으로
	알고 있으나 contain이 합산되어 console 창에 출력됨. */

	/* 이럴 때 사용 할 수 있는 방법은 hasOwnProperty 객체 사용
	   hasOwnProperty는 true false 이므로 if true일때 가져오게 함. */

	   Object.prototype.contain = function(needle) {
		for(var name in this){
				if(this[name] === needle){
					return true;
				}
		}
		return false;  
	 }
	 var o = {'name':'egoing','city':'seoul'}
	 console.log(o.contain('grapittie'));
	 var a = ['egoing','leezche','grapittie'];
	 console.log(a.contain('leezche'));
	 for(var name in o){
		 if(o.hasOwnProperty(name)){
			 console.log(name);
	 }// hasOwnProperty 는 true false이므로 if true일때 인자 땡겨오기
	 }
	 /* x.hasOwnProperty 를 호출하게 되면, x가 인자로 전달한 어떠한 값을 
	 	자신의 property로 가지고 있냐는것을 체크.
		 배열이나 객체가 가지고 있는 원래 property만을 체크하고 
		 부모로부터 상속받은 property 는 제외하게 됨. */




/*      *** 데이터 타입
	 데이터 타입에 대해서 심도있는 이야기를 해 보자. 
	 데이터 타입은 크게 2가지로 나뉘는데,
	 
	 원시 데이터 타입          ||         객체 데이터 타입
	    (primitive type)
	 기본 데이터               ||         참조 데이터 타입
	 
	 숫자					  ||         그 외 전부
	 문자열					  ||
	 불리언					  ||
	 null					  ||
	 undefined    			  ||

	 객체가 아닌것들은 전부 원시 데이터 타입이라고 한다. */



//     *** 레퍼객체
var str = 'coding';
console.log(str.length);
console.log(str.charAt(0));

/* str.length 에서 . 은 Object Access operator 로, 객체 접근 연산자 라는 뜻이다. 
  이는 . 앞에있는 무엇이 객체라는것을 의미하고 객체이기 때문에 property가 존재하고 
  method 가 존재하는 것이다. 이는 str에 담겨있는 무엇인가는 객체이고, 객체 안에 문자열이 담겨있으므로
  이는 문자열이 객체라고 한다. 
  앞에 문자열이 원시 데이터 타입이라고 하였고, 지금은 객체데이터 타입이라고 함. 
  자바에서 문자열이 원시데이터 타입이 맞긴 한데, 문자열 안에 몇번째 문자나 이런것들을 알아내기 위해서는
  문자열이 마치 객체인것처럼 동작하여야 데이터 처리 과정에서 일관성을 띄기 때문.
  이러한 이유로 JavaScript에서 문자열과 같은 원시 데이터 타입은 그것을 객체로써 사용할 때 임시로 그것을 
  객체로 만들어 준다.

  아래 코드 중 1행과 2행 사이에서 숨겨진 코드와 같은것이 작동된다. 
	var str = 'coding';
	--- str = new string('coding');  // 문자열을 객체화 하는것을 자동 실행. 
   console.log(str.length);
   // 이후 다시 원래의 원시데이터 타입으로 돌리는 작업을 자동실행.
	 
  
 	  검증 */
	   var str = 'coding';
	   str.prop = 'everybody'; // 에러창이 나오지 않았음.
	   console.log(str.prop);  // prop를 가져오려고 할 때에 undefined 출력.
	   