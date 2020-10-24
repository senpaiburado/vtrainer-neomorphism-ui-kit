import React from "react";
import NeoBaseButton from "../NeoBaseButton";
import PropTypes from "prop-types";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

const styles = createUseStyles({
  root: {
    "& img": {
      width: ({ props }) => props.iconWidth || "25px",
      height: ({ props }) => props.iconHeight || "25px"
    }
  }
});

function NeoButtonIcon(props) {
  const classes = styles({ props });
  return (
    <NeoBaseButton {...props}>
      <div className={classes.root}>
        <img src={props.src} alt={""} />
      </div>
    </NeoBaseButton>
  );
}

NeoButtonIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  src: PropTypes.string.isRequired
}

export default NeoButtonIcon;
