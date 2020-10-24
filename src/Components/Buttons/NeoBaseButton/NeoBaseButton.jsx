import React from "react";
import NeoBaseComponent from "../../NeoBaseComponent";
import PropTypes from "prop-types";
import { createUseStyles, useTheme } from "react-jss";
import { defaultStyles, defaultActions } from "../../Common/default";

const styles = createUseStyles({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    borderRadius: ({borderRadius, theme}) => borderRadius || theme.componentsBorderRadius,
    cursor: "pointer"
  }
});

/**
 * NeoBaseButton
 * @param {*} props 
 */
const NeoBaseButton = (props) => {
  const theme = useTheme();
  const classes = styles({...props, theme});
  return (
    <NeoBaseComponent {...props}>
      <div onClick={props.onClick} className={classes.button}>
        {props.children}
      </div>
    </NeoBaseComponent>);
};


NeoBaseButton.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string
};

NeoBaseButton.defaultProps = {
  width: defaultStyles.componentWidth,
  height: defaultStyles.componentHeight,
  borderRadius: defaultStyles.componentsBorderRadius,
}

export default NeoBaseButton;
