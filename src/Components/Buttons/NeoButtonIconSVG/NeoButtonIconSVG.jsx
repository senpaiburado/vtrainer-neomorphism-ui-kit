import React from "react";
import NeoBaseButton from "../NeoBaseButton";
import PropTypes from "prop-types";
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
    <NeoBaseButton height={props.height} width={props.width} onClick={props.onClick}>
      <div className={classes.root}>{props.icon}</div>
    </NeoBaseButton>
  );
}

NeoButtonIconSVG.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  icon: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired
}

export default NeoButtonIconSVG;
