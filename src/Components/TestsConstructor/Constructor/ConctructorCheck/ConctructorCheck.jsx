import React from 'react';
import classes from "./ConctructorCheck.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleQuestion} from "@fortawesome/free-regular-svg-icons";

const ConctructorCheck = (props) => {
    return (
        <div className={classes.check}>
            <input type="checkbox" onChange={(e)=>{props.isChecked(e, props.questionId)}} checked={props.multipleAnswersChecked}/>
            <label htmlFor="scales">{props.text}</label>
            <div className={classes.iconAwesome}>
                <FontAwesomeIcon icon={faCircleQuestion} style={{margin: '0 10px'}}/>
            </div>
        </div>
    );
};

export default ConctructorCheck;