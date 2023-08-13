import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useState } from "react";

function UseLayoutHook({ props }) {
  const inputRef = useRef(null);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    console.log((inputRef.current.value = "HELLO"));
  }, []);
  return (
    <div>
      <input type="text" value={"JAKE"} ref={inputRef} {...props} />
    </div>
  );
}

export default UseLayoutHook;
