import { Outlet } from "react-router-dom";

function Profile(){

	return(

		<div>

			<h1>Profile</h1>
			<p>Welcome to the Profile Page!</p>

			<hr />

			<h2>Current Outlet:</h2>

			{/* Dynamic Segment */}
			{/* Using an <Outlet /> component to render child components through nested routes */}
			
			<Outlet />

		</div>
	);
}

export default Profile;