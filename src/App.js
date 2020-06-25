import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions";
import "./App.css";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const dispatchIncrement = () => {
    return dispatch(actions.increment());
  };

  const dispatchDecrement = () => {
    return dispatch(actions.decrement());
  };

  const dispatchIsLogged = () => {
    return dispatch(actions.isLogged());
  };

  return (
    <div className="App">
      <h1>Counter - {counter}</h1>
      <button onClick={dispatchIncrement} style={{ marginRight: "1rem" }}>
        &#43;
      </button>
      <button onClick={dispatchDecrement}>&#8722;</button>
      <div style={{ marginTop: "2rem" }}>
        {isLogged ? (
          <p>This information is only seen when logged!</p>
        ) : (
          <button onClick={dispatchIsLogged}>Log in</button>
        )}
      </div>
    </div>
  );
};

export default App;
