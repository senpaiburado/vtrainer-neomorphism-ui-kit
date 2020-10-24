import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import PropTypes from 'prop-types';
import { defaultStyles } from '../Common/default';

const styles = createUseStyles({
  root: {
    borderRadius: props => props.borderRadius ||props.theme.componentsBorderRadius  ,
    width: props => props.width,
    height: props => props.height,
    background: props => props.backgroundColor || props.theme.primaryColor,
    boxShadow:
      "-4px -2px 16px rgba(195, 200, 205, 0.09), 4px 4px 18px rgba(0, 0, 0, 0.5)"
  }
});

function NeoBaseComponent(props) {
  const theme = useTheme();
  const classes = styles({...props, theme});

  return (<div className={classes.root}>{props.children}</div>);
}

export const propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  backgroundColor: PropTypes.string
}

NeoBaseComponent.propTypes = propTypes;

NeoBaseComponent.defaultProps = {
  width: defaultStyles.componentWidth,
  height: defaultStyles.componentHeight,
  borderRadius: defaultStyles.componentsBorderRadius,
  backgroundColor: defaultStyles.primaryColor
}

export default NeoBaseComponent;