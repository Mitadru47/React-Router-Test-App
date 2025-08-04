import { useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";

function DefaultProfile(){

  // Using the useOutletContext() hook to get contents of the parent <Outlet /> context.
  const [ randomStateTest, setRandomStateTest ] = useOutletContext();

  // Updating the state of child and in-turn, parent.
  useEffect(() => setRandomStateTest(0), []);

  return(

    // In React, "empty tags" refer to the shorthand syntax for React Fragments, written as <></>. 
    // This syntax is a concise way to group multiple JSX elements without introducing an additional DOM node (like a <div> or <span>) into the rendered HTML.

    <>
    
      <p>Default Outlet</p>
      <h3>{"Child State: " + randomStateTest}</h3>

      <Link to="/">Go back to the Main Page</Link>

    </>
  );
}

export default DefaultProfile;