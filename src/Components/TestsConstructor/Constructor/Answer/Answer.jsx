import classes from "./Answer.module.css";
import ConstructorButton from "../../../Buttons/ConstructorButton/ConstructorButton";
import {useEffect} from "react";

// Компонента Answer отрисовывает блок с ответами
const Answer = (props) => {
    // Функция number проставляет буквенное значение в блоке с вопросов в зависимости от пришедшего id
    const number = function () {
        if (props.id === 1) {
            return 'а)'
        }
        if (props.id === 2) {
            return 'б)'
        }
        if (props.id === 3) {
            return 'в)'
        }
        if (props.id === 4) {
            return 'г)'
        }
        if (props.id === 5) {
            return 'д)'
        }
        if (props.id === 6) {
            return 'е)'
        }
        if (props.id === 7) {
            return 'ж)'
        }
        if (props.id === 8) {
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

    // useEffect(() => {
    //     console.log('Первая загрузка и обновление props.isCorrect')
    // }, [props.isCorrect])
    //
    // useEffect(() => {
    //     console.log('Первая загрузка и обновление props.typeOfAnswers')
    // }, [props.typeOfAnswers])
    //
    return (
        <div className={classes.answer}>
            <label htmlFor="answer">
                <div className={classes.chooseAnswerBlock}>
                    <p>
                        {number()}
                    </p>
                    <div className={classes.chooseBlock}>
                        <input type={props.typeOfAnswers}
                               name='answer'
                               checked={props.isCorrect}
                               id={props.id}
                               onChange={(e)=>{props.changeWhatAnswerIsCorrect(e, props.questionId)}}
                        />
                        <span>
                            {props.correctText}
                        </span>
                    </div>
                </div>
            </label>
            <textarea
                name="answer"
                cols="62"
                rows="3"
                minLength='1'
                maxLength='1000'
                required={true}
                id={props.id}
                placeholder={props.placeholderText}
                value={valueText()}
                onChange={(e) => {props.changeValueText(e, props.questionId)}}
            >

            </textarea>
            <ConstructorButton
                text={'Удалить'}
                removeAnswer={props.removeAnswer}
                id={props.id}
                questionId={props.questionId}
            />
        </div>
    );
};

export default Answer;