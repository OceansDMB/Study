import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["front-end", "back-end", "others"]);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);

  /*   function switching() {
    var newArray = [...글제목];
    newArray.sort();
    글제목변경(newArray);
  } */
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/*       <button onClick={switching}>button</button> */}
      {글제목.map(function (글, i) {
        return (
          <div className="list">
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
      {/*     <button onClick={ () =>{누른제목변경(0)}}>버튼1</button>
    <button onClick={ () =>{누른제목변경(1)}}>버튼2</button>
    <button onClick={ () =>{누른제목변경(2)}}>버튼3</button> */}
      <button onClick={() => modal변경(!modal)}>상세내용</button>

      {modal === true ? (
        <Switch2 글제목={글제목} 누른제목={누른제목}></Switch2>
      ) : null}
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

// 변수로 저장하지 않고 state로 선언해두면 변경시에 HTML이 자동으로 재렌더링됨.
// 리액트에서 UI를 만들 때 state 데이터를 이용함.
export default App;
