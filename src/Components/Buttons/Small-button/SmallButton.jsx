import React from 'react';
import classes from "./SmallButton.module.css";

const SmallButton = (props) => {
    return (
        <div className={classes.button}>
            <p>
                <a href={props.link}>{props.text}</a>
            </p>
        </div>
    );
};

export default SmallButton;