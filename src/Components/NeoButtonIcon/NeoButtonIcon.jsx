import React from "react";
import NeoBaseButton from "../NeoBaseButton";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

const styles = createUseStyles({
  root: {
    "& img": {
      width: ({ props }) => props.iconWidth || "25px",
      height: ({ props }) => props.iconHeight || "25px"
    }
  }
});

function NeoButtonIconSVG(props) {
  const classes = styles({ props });
  return (
    <NeoBaseButton height={props.height} width={props.width}>
      <div className={classes.root}>
        <img src={props.src} alt={""} />
      </div>
    </NeoBaseButton>
  );
}

export default NeoButtonIconSVG;
