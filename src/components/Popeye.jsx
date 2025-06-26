import { Link } from "react-router-dom";

function Popeye(){

	return(
	
		// In React, "empty tags" refer to the shorthand syntax for React Fragments, written as <></>. 
		// This syntax is a concise way to group multiple JSX elements without introducing an additional DOM node (like a <div> or <span>) into the rendered HTML.

		<>
		
			<p>Hi, I am Popeye! I love to eat Spinach!</p>
			<Link to="/">Go back</Link>
		
		</>
	);
}

export default Popeye;