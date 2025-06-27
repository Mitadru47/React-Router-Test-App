import { Link } from "react-router-dom";

function Spinach(){

	return(

		// In React, "empty tags" refer to the shorthand syntax for React Fragments, written as <></>. 
		// This syntax is a concise way to group multiple JSX elements without introducing an additional DOM node (like a <div> or <span>) into the rendered HTML.

		<>
		
			<p>Hi, I am Spinach! Popeye loves to eat me!</p>
		
			<nav>

				<ul>
					
					<li><Link to="/">Go back to the Main Page</Link></li>
					<li><Link to="/profile">Revert to Default Outlet</Link></li>
			
				</ul>
			
			</nav>

		</>
	);
}

export default Spinach;