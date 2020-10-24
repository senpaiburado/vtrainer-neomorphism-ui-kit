import React from "react";
import "./styles.css";
import NeoButtonIconSVG from "./Components/Buttons/NeoButtonIconSVG";
import NeoButtonText from "./Components/Buttons/NeoButtonText";
import NeoButtonIcon from "./Components/Buttons/NeoButtonIcon";
import { ReactComponent as YourSvg } from "./share.svg";
import { ThemeProvider } from "react-jss";
import { blackThemeConfig } from "./Components/Common/themes";
import NeoBaseComponent from "./Components/NeoBaseComponent";
import TextInput from "./Components/Input/TextInput/TextInput";

export default function App() {
  return (
    <ThemeProvider theme={blackThemeConfig}>
      <div className="App">
        <h1>V-Trainer UI Kit</h1>
        <h3 align="left">Buttons</h3>
        <div style={{ display: "flex" }}>
          {/* <NeoButtonIconSVG icon={<YourSvg />} />
          <NeoButtonText text={"Click"} /> */}
          {/* <NeoButtonIcon onClick={()=>{}}
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/VisualEditor_-_Icon_-_Help.svg/1024px-VisualEditor_-_Icon_-_Help.svg.png"
            }
          /> */}
          {/* <NeoBaseComponent
            width={100}
            height={'75px'}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <p style={{lineHeight: '37.5px', color: 'white'}}>Text</p>
          </NeoBaseComponent> */}
        </div>

        <h3 align="left">Inputs</h3>
        <div style={{ display: "flex" }}>
          <TextInput width={130} >Hello</TextInput>
        </div>
      </div>
    </ThemeProvider>
  );
}
