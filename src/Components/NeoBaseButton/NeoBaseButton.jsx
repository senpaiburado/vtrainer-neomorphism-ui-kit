import React from "react";
import NeoBaseComponent from "../NeoBaseComponent";
import { createUseStyles, useTheme } from "react-jss";

const styles = createUseStyles({
  button: {
    display: "flex",
    color: ({theme}) => theme.textColor || "white",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  }
});

const NeoBaseButton = (props) => {
  const theme = useTheme();
  const classes = styles({...props, theme});
  return (
    <NeoBaseComponent width={"70px"} height={"50px"}>
      <div className={classes.button}>
        {props.children}
      </div>
    </NeoBaseComponent>);
};

export default NeoBaseButton;
