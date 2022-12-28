import React from 'react';
import classes from "./Answer.module.css";
import ConstructorButton from "../../../Buttons/ConstructorButton/ConstructorButton";

// Компонента Answer отрисовывает блок с ответами
const Answer = (props) => {
    // Функция number проставляет буквенное значение в блоке с вопросов в зависимости от пришедшего id
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

    // Функция valueText проверяет, приходит ли текст в значение value, и если нет, то оставляет пустую строку. Тогда в блоке вопроса отображается значение из Placeholder.
    const valueText = function () {
        if (props.valueText !== '') {
            return props.valueText
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
                id={props.id}
                placeholder={props.placeholderText}
                value={valueText()}
                onChange={props.changeValueText}
            >

            </textarea>
            <ConstructorButton text={'Удалить'} removeAnswer={props.removeAnswer} id={props.id}/>
        </div>
    );
};

export default Answer;