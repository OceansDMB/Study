/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["front-end", "back-end", "others"]);
  let [따봉, 따봉변경] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button>button</button>
      <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            🧤
          </span>
          {따봉}
        </h3>
        <p>3월 16일 발행</p>
        <hr />
        <h3>{글제목[1]}</h3>
        <p>3월 16일 발행</p>
        <hr />
        <h3>{글제목[2]}</h3>
        <p>3월 16일 발행</p>
        <hr />
      </div>
    </div>
  );
}
// 변수로 저장하지 않고 state로 선언해두면 변경시에 HTML이 자동으로 재렌더링됨.
export default App;
