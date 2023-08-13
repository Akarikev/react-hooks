import React from "react";
import UseReducerHook from "@/components/UseReducerHook";
import UseEffectHook from "@/components/UseEffectHook";
import UseRefHook from "@/components/UseRefHook";

import UseLayoutHook from "@/components/UseLayoutHook";

function index() {
  return (
    <div>
      <UseReducerHook />
      {/* <UseEffectHook /> */}

      <UseRefHook />

      {/* <Input /> */}
      <UseLayoutHook />
    </div>
  );
}

export default index;
