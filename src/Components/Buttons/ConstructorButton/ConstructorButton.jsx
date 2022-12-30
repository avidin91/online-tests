import React from 'react';
import classes from "./ConstructorButton.module.css";

// Кмпонента ConstructorButton - переиспользуемая кнопка.
const ConstructorButton = (props) => {

    // Функция filterButtons определяет какие функции пришли просы. Эта кнопка используется как макет кнопки в рахных местах.
    const filterButtons = function (e) {
        if (e.target.textContent === 'Добавить ответ') {
            return props.addAnswer(e)
        } if (e.target.textContent === 'Удалить') {
            return props.removeAnswer(e, props.questionId)
        } if (e.target.textContent === 'Добавить вопрос') {
            return props.addQuestion(e)
        }
    }

    return (
            <div className={classes.questionAdd}  onClick={filterButtons}>
                <p
                    id={props.id}
                >
                    {props.text}
                </p>
            </div>
    );
};

export default ConstructorButton;