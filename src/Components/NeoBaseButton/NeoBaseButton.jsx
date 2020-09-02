import React from "react";

const styles = (props = {}) => ({
  button: {
    borderRadius: process.env.REACT_APP_STYLE_BORDER_RADIUS,
    width: props.width || "60px",
    height: props.height || "50px",
    display: "flex",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(144.05deg, #32383E -69.07%, #17191C 122.22%)",
    boxShadow:
      "-4px -2px 16px rgba(195, 200, 205, 0.09), 4px 4px 18px rgba(0, 0, 0, 0.5)"
  }
});

const NeoBaseButton = (props) => {
  return <div style={styles(props).button}>{props.children}</div>;
};

export default NeoBaseButton;