import { useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";

function Spinach(){

  // Using the useOutletContext() hook to get contents of the parent <Outlet /> context.
  const [ randomStateTest, setRandomStateTest ] = useOutletContext();

  // Updating the state of child and in-turn, parent.
  useEffect(() => setRandomStateTest(2), []);

	return(

		// In React, "empty tags" refer to the shorthand syntax for React Fragments, written as <></>. 
		// This syntax is a concise way to group multiple JSX elements without introducing an additional DOM node (like a <div> or <span>) into the rendered HTML.

		<>
		
			<p>Hi, I am Spinach! Popeye loves to eat me!</p>
      <h3>{"Child State: " + randomStateTest}</h3>
		
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