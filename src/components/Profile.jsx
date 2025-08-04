import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Profile(){

  const [ randomStateTest, setRandomStateTest ] = useState(0);

	return(

		<div>

			<h1>Profile</h1>
			<p>Welcome to the Profile Page!</p>

      <h3>{"Parent State: " + randomStateTest}</h3>

      <nav>

        <ul>

          <li><Link to="/profile/popeye">Render Outlet - Popeye</Link></li>
          <li><Link to="/profile/spinach">Render Outlet - Spinach</Link></li>

        </ul>

      </nav>

			<hr />

			<h2>Current Outlet:</h2>

			{/* Using an <Outlet /> component to render child components through nested routes */}
      {/* Using the context prop of the <Outlet /> components to pass a parent state */}

			<Outlet context={[ randomStateTest, setRandomStateTest ]} />

		</div>
	);
}

export default Profile;