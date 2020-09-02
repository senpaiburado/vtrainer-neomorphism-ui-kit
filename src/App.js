import React from "react";
import "./styles.css";
import NeoButtonIconSVG from "./Components/NeoButtonIconSVG";
import NeoButtonText from "./Components/NeoButtonText";

import { ReactComponent as YourSvg } from "./share.svg";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <NeoButtonIconSVG icon={<YourSvg />} />
      <NeoButtonText text={"Click"} />
    </div>
  );
}
