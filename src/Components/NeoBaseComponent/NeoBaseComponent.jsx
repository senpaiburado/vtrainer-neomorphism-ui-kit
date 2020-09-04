import React from "react";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  root: {
    borderRadius: process.env.REACT_APP_STYLE_BORDER_RADIUS,
    width: ({props}) => props.width || "60px",
    height: ({props}) => props.height || "50px",
    background: "linear-gradient(144.05deg, #323     -69.07%, #17191C 122.22%)",
    boxShadow:
      "-4px -2px 16px rgba(195, 200, 205, 0.09), 4px 4px 18px rgba(0, 0, 0, 0.5)"
  }
});

function NeoBaseComponent(props) {
  const classes = styles({props});

  return (<div className={classes.root}>{props.children}</div>);

}

NeoBaseComponent.defaultProps = {
  borderRadius: "16px"
};

export default NeoBaseComponent;
