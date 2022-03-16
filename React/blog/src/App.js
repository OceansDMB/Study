import logo from "./logo.svg";
import "./App.css";

function App() {
  let posts = "강남 고기 맛집";
  return (
    <div className="App">
      <div className="black-nav">
        <div className={posts}>개발 Blog</div>
      </div>
      <img src={logo} />
      <h4>{posts}</h4>
    </div>
  );
}

export default App;
