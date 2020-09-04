import React from "react";
import "./styles.css";
import NeoButtonIconSVG from "./Components/NeoButtonIconSVG";
import NeoButtonText from "./Components/NeoButtonText";
import NeoButtonIcon from "./Components/NeoButtonIcon";

import { ReactComponent as YourSvg } from "./share.svg";

import { ThemeProvider } from "react-jss";

const blackThemeConfig = {                             theme_foreground: "linear-gradient(144.05deg, #32383E -69.07%, #17191C 122.22%)",                       textColor: "orange",
   componentsBorderRadius: "16px",               
};

export default function App() {
  return (
    <ThemeProvider theme={blackThemeConfig}>
    <div className="App">
      <h1>V-Trainer UI Kit</h1>
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
     </ThemeProvider>
  );
}
