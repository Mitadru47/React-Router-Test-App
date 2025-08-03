import { Link, useParams } from "react-router-dom";
import Popeye from "./Popeye";
import Spinach from "./Spinach";
import DefaultProfile from "./DefaultProfile";

function Profile(){

  const { name } = useParams();

	return(

		<div>

			<h1>Profile</h1>
			<p>Welcome to the Profile Page!</p>

      <nav>

        <ul>

          <li><Link to="/profile/popeye">Render Outlet - Popeye</Link></li>
          <li><Link to="/profile/spinach">Render Outlet - Spinach</Link></li>

        </ul>

      </nav>

			<hr />

			<h2>Current Outlet:</h2>

			{/* Dynamic Segment(s) */}
      { name === "popeye" ? <Popeye /> : (name === "spinach" ? <Spinach /> : <DefaultProfile />) }
		
		</div>
	);
}

export default Profile;