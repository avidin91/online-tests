import React from 'react';
import classes from "./SmallButton.module.css";

const SmallButton = (props) => {
    return (
        <div className={classes.button}>
            <p>{props.text}</p>
        </div>
    );
};

export default SmallButton;