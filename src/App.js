import React from "react";
import "./styles.css";
import NeoButtonIconSVG from "./Components/NeoButtonIconSVG";
import NeoButtonText from "./Components/NeoButtonText";
import NeoButtonIcon from "./Components/NeoButtonIcon";

import { ReactComponent as YourSvg } from "./share.svg";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h3 align="left">Buttons</h3>
      <div style={{ display: "flex" }}>
        <NeoButtonIconSVG icon={<YourSvg />} />
        <NeoButtonText text={"Click"} />
        <NeoButtonIcon
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/VisualEditor_-_Icon_-_Help.svg/1024px-VisualEditor_-_Icon_-_Help.svg.png"
          }
        />
      </div>

      <h3 align="left">Buttons</h3>
      <div style={{ display: "flex" }}></div>
    </div>
  );
}
