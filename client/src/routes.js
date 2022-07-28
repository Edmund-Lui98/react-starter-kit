import { BrowserRouter as Router, Route, Routes,Switch, Link } from "react-router-dom";
import App from "./pages/chatApp/App";
import Home from "./pages/home";
import Todo from "./pages/todoApp/TodoApp";

function RoutesHome() {

  return (
    <div>
        <Router>
          <Routes>
            <Route path="/chat" element={<App/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/todo" element={<Todo/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default RoutesHome;
