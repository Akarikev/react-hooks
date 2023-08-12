"use client";

import React, { useReducer } from "react";
import { useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
        showtext: state.showtext,
      };

    case "toggleShowText":
      return {
        count: state.count,
        showtext: !state.showtext,
      };

    default:
      return {
        state,
      };
  }
};

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showtext: true });

  return (
    <div>
      <div>{state.count}</div>

      <button
        onClick={() => {
          dispatch({ type: "increment" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        click here
      </button>

      {state.showtext && <p>text here</p>}
    </div>
  );
}

export default UseReducerHook;
