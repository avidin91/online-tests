import React from 'react';
import classes from "./ConstructorButton.module.css";

const ConstructorButton = (props) => {
    return (
            <div className={classes.questionAdd}  onClick={props.addQuestion}>
                <p>
                    {props.text}
                </p>
            </div>
    );
};

export default ConstructorButton;