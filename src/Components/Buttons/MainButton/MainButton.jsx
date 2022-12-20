import React from 'react';
import classes from "./MainButton.module.css";

const MainButton = (props) => {
    return (
        <div className={classes.button}>
            <p>{props.text}</p>
        </div>
    );
};

export default MainButton;