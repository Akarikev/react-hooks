import React from "react";
// import "../styles/globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
function catFact() {
  return (
    <div className={inter.className}>
      <div>
        <p>catfact</p>
      </div>
    </div>
  );
}

export default catFact;
