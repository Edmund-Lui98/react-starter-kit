import { BrowserRouter as Router, Route, Routes,Switch, Link } from "react-router-dom";
import App from "./App";

function Home() {

  return (
    <div>
        <p> 
            Welcome! This is the home page with the master list of projects for ease of access! 
        </p>
        <Link to="/chat">
          <button>Chat</button>
        </Link>
    </div>
  );
}

export default Home;
