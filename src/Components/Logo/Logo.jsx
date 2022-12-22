import React from 'react';
import classes from "./Logo.module.css";

const Logo = (props) => {
    return (
        <div className={classes.cssModifier}>
            <a href="/">
                <p>{props.text}</p>
            </a>
        </div>
    );
};

export default Logo;