import React from "react";
import UseReducerHook from "@/components/UseReducerHook";
import UseEffectHook from "@/components/UseEffectHook";
import UseRefHook from "@/components/UseRefHook";

function index() {
  return (
    <div>
      <UseReducerHook />
      {/* <UseEffectHook /> */}

      <UseRefHook />
    </div>
  );
}

export default index;
