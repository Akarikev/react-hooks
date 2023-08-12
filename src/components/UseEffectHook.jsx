import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function UseEffectHook() {
  const [data, setData] = useState([]);
  const [reloadData, setRelodData] = useState(0);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data);

      console.log("api called");
    });
  }, []);
  return (
    <div>
      <button onClick={() => setRelodData((prevData) => prevData + 1)}>
        reload data
      </button>

      <pre>
        {"Number of reloads: " + reloadData}
        {data.map((item) => {
          return <div>email :{item.email}</div>;
        })}
      </pre>
    </div>
  );
}

export default UseEffectHook;
