import React from "react";
import NeoBaseComponent from "../../NeoBaseComponent";
import PropTypes from "prop-types";
import {createUseStyles} from "react-jss";
import { defaultStyles } from "../../Common/default";

const styles = createUseStyles({
    border: {
        width: "100%",
        height: "100%",
        boxShadow: "inset 2px 2px 2px rgba(26, 32, 38, 0.4)",
        borderRadius: defaultStyles.componentsBorderRadius,
        background: "linear-gradient(303.77deg, #2C333A -71.57%, #1C1E22 59.28%, #121416 59.28%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    body: {
        background: "linear-gradient(303.77deg, #2C333A -71.57%, #1C1E22 59.28%, #121416 59.28%)",
        boxShadow: "inset -2px -2px 10px rgba(255, 255, 255, 0.05), inset 2px 3px 10px #070709",
        width: "50%",
        height: "50%",
        borderRadius: defaultStyles.componentsBorderRadius
    }
});

function TextInput(props) {

    const classes = styles({props});
    return (
        <NeoBaseComponent {...props}>
            <div className={classes.border}>
                <div className={classes.body}>

                </div>
            </div>
        </NeoBaseComponent>
    )
}

export default TextInput;