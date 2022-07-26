import { BrowserRouter as Router, Route, Routes,Switch, Link } from "react-router-dom";
import App from "./App";
import Home from "./home";

function RoutesHome() {

  return (
    <div>
        <Router>
          <Routes>
            <Route path="/chat" element={<App/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default RoutesHome;
