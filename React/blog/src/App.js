  import React,{useState} from "react";
  import "./App.css"


  function App() {
    let [title,titlech] = useState(["Front-End","Back-End","Servers"]);
    let [thumbsup,thumbsupch] = useState([0,0,0]);
    let [modal,modalch] = useState(false);
    let [pushti,pushtich] = useState(0);

    return (
      <div className="top-bar">
        <div className="black-nav">
          <div>Programming Blog</div>
        </div>
      </div>
      {
        title.map(function(글, i){
          return (<div className="list">
          <h3 onClick={() =>{pushtich(i)}}>
          {글}
          </h3>
          <span onClick={()=>
          {
            thumbsupch(thumbsup+1);
          }
        }
          </div>)
        })
      }
    )
  }

  export default App;