import React from "react";
import UseReducerHook from "@/components/UseReducerHook";
import UseEffectHook from "@/components/UseEffectHook";
import UseRefHook from "@/components/UseRefHook";

import UseLayoutHook from "@/components/UseLayoutHook";
import UseImperativeHandleHook from "@/components/UseImperativeHandleHook";

function index() {
  return (
    <div className="text-black bg-white">
      <UseReducerHook />
      {/* <UseEffectHook /> */}

      <UseRefHook />

      {/* <Input /> */}
      <UseLayoutHook />

      <UseImperativeHandleHook />
    </div>
  );
}

export default index;
