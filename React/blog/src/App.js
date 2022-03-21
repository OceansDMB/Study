import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";

function App() {
  let [글제목, 글제목변경] = useState(["front-end", "back-end", "others"]);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값,입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {글제목.map(function (글, i) {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                누른제목변경(i);
              }}
            >
              {글}
            </h3>
            <span
              onClick={() => {
                따봉변경(따봉 + 1);
              }}
            >
              🧤
            </span>
            {따봉}
            <p>3월 16일 발행</p>
            <hr />
          </div>
        );
      })}

      <div className="publish">
        <input onChange={ (e) => {입력값변경(e.target.value)}}/>
        <button onClick={()=>{
          var arrayCopy = [...글제목];
          arrayCopy.unshift(입력값);
          글제목변경(arrayCopy);
        }}>저장</button>
      </div>
      <Profile/>
      <button onClick={() => modal변경(!modal)}>상세내용</button>

      {
      modal === true 
      ? (<Switch2 글제목={글제목} 누른제목={누른제목}></Switch2>) 
      : null
      }
    </div>
  );
}
function Switch2(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <span>세부내용</span>
    </div>
  );
}


// 예전버젼 react에서의 컴포넌트 생성법
//  class : 변수/함수 보관하는 덩어리
//  extends : 오른쪽에 있는 놈의 성질을 물려받겠습니다.
//  constructor : clas의 변수/초기값 저장할 때 쓴다.

class Profile extends React.Component {
  constructor(){
    super();
    this.state = { name : 'Kim',age : 30};
  }
  
  changeName(){
    this.setState({ name: "Park" })
  }

  render(){
    return(
      <div>
      <h3>프로필입니다.</h3>
      <p>저는 {this.state.name} 입니다.</p>
      <button onClick={ this.changeName.bind(this) }>버튼</button>
      </div>
      )
    }
  };
    
export default App;







// 변수로 저장하지 않고 state로 선언해두면 변경시에 HTML이 자동으로 재렌더링됨.
// 리액트에서 UI를 만들 때 state 데이터를 이용함.

  /*   function switching() {
    var newArray = [...글제목];
    newArray.sort();
    글제목변경(newArray);
  } */

{/*       <button onClick={switching}>button</button> */}


  {/*     <button onClick={ () =>{누른제목변경(0)}}>버튼1</button>
    <button onClick={ () =>{누른제목변경(1)}}>버튼2</button>
    <button onClick={ () =>{누른제목변경(2)}}>버튼3</button> */
  }

  {/*       {입력값}
<input onChange={ (e) => {입력값변경(e.target.value)}}/>
 */
  }
