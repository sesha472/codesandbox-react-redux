import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/actions";

const Countercomponent = () => {
  const count = useSelector((data) => data.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>count value: {count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
    </div>
  );
};

export default Countercomponent;
