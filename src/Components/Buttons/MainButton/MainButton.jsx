import React from 'react';
import classes from "./MainButton.module.css";

const MainButton = (props) => {
    return (
        <div className={classes.button}>
            <p>
                <a href={props.link}>{props.text}</a>
            </p>
        </div>
    );
};

export default MainButton;