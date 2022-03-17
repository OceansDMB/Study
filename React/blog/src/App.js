//eslint-disable

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["front-end", "back-end", "others"]);
  let [따봉, 따봉변경] = useState(0);
  let [Modal,Modal변경] = useState(false);

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
      
      <div className="list">
        <h3>
         {글제목[0]}
          <span
            onClick={() => 
              {
                따봉변경(따봉 + 1);
              }
            }
          >
          🧤
          </span>
          {따봉}
        </h3>
        <p>3월 16일 발행</p>
        <hr />
        </div>
        
        <div className="list">
        <h3>
          {글제목[1]}
        </h3>
        <p>3월 16일 발행</p>
        <hr />
        </div>

        <div>
          <h3> { 글제목[2]}</h3>
        <p>3월 16일 발행</p>
        <hr />
      </div>
      {Modal  === true 
      ? <Modal></Modal> 
      : null
      }
      </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

// 변수로 저장하지 않고 state로 선언해두면 변경시에 HTML이 자동으로 재렌더링됨.
// 리액트에서 UI를 만들 때 state 데이터를 이용함.
export default App;
