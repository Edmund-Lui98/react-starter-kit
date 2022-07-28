import { BrowserRouter as Router, Route, Routes,Switch, Link } from "react-router-dom";
import App from "./chatApp/App";

function Home() {

  return (
    <div>
        <p> 
            Welcome! This is the home page with the master list of projects for ease of access! 
        </p>
        <Link to="/chat">
          <button>Chat</button>
        </Link>
        <Link to="/todo">
          <button>To do</button>
        </Link>
    </div>
  );
}

export default Home;
