import { Link } from "react-router-dom";

function DefaultError(){

  return(

    <div>

      <h1>Error</h1>
      <p>This route doesn't exist!</p>

      <nav>

        <ul>
          <li>

            <Link to="/">Go back to the Main Page</Link>

          </li>
        </ul>

      </nav>

    </div>
  );
}

export default DefaultError;