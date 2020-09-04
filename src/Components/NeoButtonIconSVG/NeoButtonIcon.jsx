import React from "react";
import NeoBaseButton from "../NeoBaseButton";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

const styles = createUseStyles({
  root: {
    "& svg": {
      width: ({ props }) => props.iconWidth || "25px",
      height: ({ props }) => props.iconHeight || "25px"
    },
    "&:hover svg": {
	    fill: "#fff"
    }
  }
});

function NeoButtonIconSVG(props) {
  console.log(props);
  const classes = styles({ props });
  return (
    <NeoBaseButton height={props.height} width={props.width}>
      <div className={classes.root}>{props.icon}</div>
    </NeoBaseButton>
  );
}

export default NeoButtonIconSVG;
