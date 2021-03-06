import React from "react";
import NeoBaseButton from "../NeoBaseButton";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

const styles = createUseStyles({
  root: {
    color: theme => {
      return theme.textColor || "#fff"
    },

    fontSize: props => props.textSize || "12pt"
  }
});

function NeoButtonText(props) {
  const theme = useTheme();
  const classes = styles({ ...props, theme });

  return (
    <NeoBaseButton width={props.width} height={props.height}>
      <span className={classes.root}>{props.text}</span>
    </NeoBaseButton>
  );
}

export default NeoButtonText;
