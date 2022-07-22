import { Link } from "react-router-dom";

function Home() {

  return (
    <div>
        <p> 
            Welcome! This is the home page with the master list of projects for ease of access! 
        </p>
        <Link to="/page2">
            <button>
              Go to Page 2 
            </button>
        </Link>
    </div>
  );
}

export default Home;
