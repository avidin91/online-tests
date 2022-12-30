import React from 'react';
import Textarea from "../Textarea/Textarea";
import ConctructorCheck from "../ConctructorCheck/ConctructorCheck";
import classes from "./Question.module.css";
import Answer from "../Answer/Answer";
import ConstructorButton from "../../../Buttons/ConstructorButton/ConstructorButton";
import {faCircleXmark} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// Компонента Question отрисовывает поле с блоком "Вопрос"
const Question = ({question, addAnswer, removeAnswer, changeValueText, removeQuestion}) => {
    const answers = question.answers;

    return (
            <fieldset>
                <legend>Вопрос {question.id}</legend>
                <div className={classes.buttonDelete} onClick={removeQuestion}>
                    <p id={question.id}>
                        Удалить вопрос
                    </p>
                    <FontAwesomeIcon icon={faCircleXmark} style={{margin: '1px 0 1px 5px', color: 'red', fontSize: '20px'}}/>
                </div>
                <label className={classes.test} htmlFor="question">Введите ваш вопрос:</label>
                <Textarea placeholderText={question.questionPlaceholder}
                          rowsCount={6}
                          nameText={"question"}
                          idText={"question"}
                />

                <ConctructorCheck text={'Несколько вариантов ответа'}/>
                <div>
                    <p className={classes.answerP}>Добавьте варианты ответа</p>
                    {answers.map((answer, index) => {
                        return <Answer
                            id={answer.id}
                            questionId={question.id}
                            placeholderText={answer.placeholderText}
                            valueText={answer.valueText}
                            key={answer.id}
                            changeValueText={changeValueText}
                            removeAnswer={removeAnswer}
                        />


                    })}
                    <ConstructorButton
                        addAnswer={addAnswer}
                        text={'Добавить ответ'}
                        id={question.id}
                    />
                </div>
                <ConctructorCheck text={'Добавить теоретическую часть в ответ'}/>
            </fieldset>
    );
};

export default Question;