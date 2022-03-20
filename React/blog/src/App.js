import React, { useState } from "react";
import "./App.css";

function App() {
  let [title, titlech] = useState(["Front-End", "Back-End", "Servers"]);
  let [thumbsup, thumbsupch] = useState([0, 0, 0]);
  let [modal, modalch] = useState(false);
  let [pushti, pushtich] = useState(0);

  return (
    <div className="top-bar">
      <div className="black-nav">
        <div>Programming Blog</div>
      </div>
      {title.map(function (글, i) {
        return (
          <div className="list">
            <h3
              onClick={() => {
                pushtich(i);
              }}
            >
              {글}
            </h3>
            <span
              onClick={() => {
                thumbsupch(thumbsup + 1);
              }}
            >
              ❤
            </span>
            {thumbsup}
            <p>3dnjf 16일 발행</p>
            <hr />
          </div>
        );
      })}
      {modal === true ? (
        <Switch2 title={title} pushti={pushti}></Switch2>
      ) : null}
    </div>
  );
}
function Switch2(props) {
  return (
    <div className="Modal">
      <h2>{props.title[props.pushti]}</h2>
      <p>날짜</p>
      <span>세부내용</span>
    </div>
  );
}

export default App;
