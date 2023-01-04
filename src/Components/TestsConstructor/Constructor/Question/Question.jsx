import React, {useState} from 'react';
import TextareaModule from "../TextareaModule/TextareaModule";
import ConctructorCheck from "../ConctructorCheck/ConctructorCheck";
import classes from "./Question.module.css";
import Answer from "../Answer/Answer";
import ConstructorButton from "../../../Buttons/ConstructorButton/ConstructorButton";
import {faCircleXmark} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// Компонента Question отрисовывает поле с блоком "Вопрос"
const Question = ({question, addAnswer, removeAnswer, changeValueText, removeQuestion, changeWhatAnswerIsCorrect}) => {
    const answers = question.answers;

    // Состояние компоненты Answer, и в нём input будет либо checkbox либо radio. В зависимости от пропсов из компоненты ConctructorCheck, и выбрано ли "Несколько вариантов ответов" или нет.
    const [typeOfAnswers, setTypeOfAnswers] = useState(
        'radio'
    )

    // Функция isChecked принимает пропсы из ConctructorCheck "Несколько вариантов ответов". И зависимости от них меняет состояние input на radio или checkbox внутри компоненты Answer.
    const isChecked = function (e) {
        if (e.target.checked === false) {
            setTypeOfAnswers('radio')
        } else {
            setTypeOfAnswers('checkbox')
        }
    }

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
                <TextareaModule placeholderText={question.questionPlaceholder}
                          rowsCount={5}
                          nameText={"question"}
                          idText={"question"}
                />

                <ConctructorCheck text={'Несколько вариантов ответа'} isChecked={isChecked}/>
                <div>
                    <p className={classes.answerP}>Добавьте варианты ответа</p>
                    {answers.map((answer, index) => {
                        return <Answer
                            id={answer.id}
                            typeOfAnswers={typeOfAnswers}
                            questionId={question.id}
                            placeholderText={answer.placeholderText}
                            valueText={answer.valueText}
                            isCorrect={answer.isCorrect}
                            changeWhatAnswerIsCorrect={changeWhatAnswerIsCorrect}
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