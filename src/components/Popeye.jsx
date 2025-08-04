import { useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";

function Popeye(){

  // Using the useOutletContext() hook to get contents of the parent <Outlet /> context.
  const [ randomStateTest, setRandomStateTest ] = useOutletContext();

  // Updating the state of child and in-turn, parent.
  useEffect(() => setRandomStateTest(1), []);

	return(
	
		// In React, "empty tags" refer to the shorthand syntax for React Fragments, written as <></>. 
		// This syntax is a concise way to group multiple JSX elements without introducing an additional DOM node (like a <div> or <span>) into the rendered HTML.

		<>
		
			<p>Hi, I am Popeye! I love to eat Spinach!</p>
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

export default Popeye;