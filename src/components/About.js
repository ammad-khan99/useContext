import React, { useContext, useReducer } from "react";
import userContext from "../context/UserContext";

function About() {
  //const user = useContext(userContext)
  //console.log(user);
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "increase":
        return (state += 1);
      case "decrease":
        return (state -= 1);
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* my name is {user.name} and i am {user.age} */}

      <h1>{state}</h1>
      <button onClick={() => dispatch("increase")}>Increase</button>
      <button onClick={() => dispatch("decrease")}>Decrease</button>
    </div>
  );
}

export default About;
