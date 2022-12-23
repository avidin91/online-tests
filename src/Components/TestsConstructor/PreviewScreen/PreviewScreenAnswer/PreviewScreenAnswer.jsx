import React from 'react';
import classes from "./PreviewScreenAnswer.module.css";

const PreviewScreenAnswer = (props) => {
    const number = function() {
        if (props.id === 1) {
            return 'а)'
        } if (props.id === 2) {
            return 'б)'
        } if (props.id === 3) {
            return 'в)'
        } if (props.id === 4) {
            return 'г)'
        } if (props.id === 5) {
            return 'д)'
        } if (props.id === 6) {
            return 'е)'
        } if (props.id === 7) {
            return 'ж)'
        } if (props.id === 8) {
            return 'з)'
        }
    }

    const text = function () {
        if (props.text === '') {
            return props.placeholderText
        } else {
            return props.text
        }
    }

    return (
        <div className={classes.answer}>
            <input type="radio" id="" name='question1'/>
            <div className={classes.answerText}>
                <p>
                    {number()} {text()}
                </p>
            </div>
        </div>
    );
};

export default PreviewScreenAnswer;