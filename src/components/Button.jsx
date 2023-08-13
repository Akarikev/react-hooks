import React, { useImperativeHandle } from "react";
import { useState, forwardRef } from "react";

const Button = forwardRef((props, ref, classN) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <div>
      <button>button from child</button>

      {toggle && <span>toggle</span>}
    </div>
  );
});

export default Button;
