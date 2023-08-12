import React, { useState } from "react";
import { useRef } from "react";

function UseRefHook() {
  const [data, setData] = useState();
  const inputRef = useRef(null);

  const clivkme = () => {
    setData(inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>{data}</h1>

      <input type="text" placeholder="enter name" ref={inputRef} />
      <button onClick={clivkme}>Change number</button>
    </div>
  );
}

export default UseRefHook;
