import { Link, Navigate, useNavigate } from "react-router-dom";

function App() {
    
  // The <Navigate /> component is a wrapper around the useNavigate hook 
  // that lets us navigate programmatically, to URLs, or even go back down the user’s history

  const navigate = useNavigate();

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

      {/* Re-Directing Logic using <Navigate /> Component */}
      {/* The user will always be re-directed to "/profile/default" when they try to navigate to the Main Page "/" */}

      {/* <Navigate to="/profile/default" /> */}

      {/* Using useNavigate hook to programmatically navigate to a custom URL or go back or forth the user's browser history */}

      <button onClick={ () => navigate("/profile/default") }>Navigate Test - Custom - "/profile/default"</button>

      <br></br>
      <br></br>

      <button onClick={ () => navigate(-1) }>Navigate Test - Back - (-1)</button><br></br>
      <button onClick={ () => navigate(+1) }>Navigate Test - Forward - (+1)</button>

    </div>
  );
}

export default App;
