  import React,{useState} from "react";
  import "./App.css"


  function App() {
    let [title,titlech] = useState(["Front-End","Back-End","Servers"]);
    let [thumbsup,thumbsupch] = useState([0,0,0]);


    return (
      <div className="top-bar">
        <div className="black-nav">
          <div>Programming Blog</div>
        </div>
      </div>
    )
  }

  export default App;