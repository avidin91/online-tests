import React from 'react';
import classes from "./Logo.module.css";

const Logo = (props) => {
    return (
        <div className={classes.cssModifier}>
            <p>{props.text}</p>
        </div>
    );
};

export default Logo;