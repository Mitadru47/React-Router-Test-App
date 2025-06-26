import { Link } from "react-router-dom";

function App() {
    
  return(

    <div>

      <h1>App</h1>
      <p>Welcome to the Main Page!</p>

      <nav>

        <ul>

          <li>
          
            {/* Using <Link></Link> instead of <a></a> to prevent page re-loading */}
            <Link to="profile">Profile</Link>
            
          </li>

        </ul>

      </nav>

    </div>
  );
}

export default App;
