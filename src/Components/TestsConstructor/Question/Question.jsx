import React from 'react';
import classes from "./Question.module.css";
import ConstructorButton from "../../Buttons/ConstructorButton/ConstructorButton";

const Question = (props) => {
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
        if (props.text !== '') {
            return props.text
        } else {
            return ''
        }
    }

    return (
        <div className={classes.answer}>
            <label htmlFor="answer" className={classes.labelText}>
                <p>
                    {number()}
                </p>
            </label>
            <textarea
                name="answer"
                cols="58"
                rows="3"
                minLength='1'
                maxLength='1000'
                required={true}
                placeholder={props.placeholderText}
                value={text()}
            >

            </textarea>
            <ConstructorButton text={'Удалить'}/>
        </div>
    );
};

export default Question;