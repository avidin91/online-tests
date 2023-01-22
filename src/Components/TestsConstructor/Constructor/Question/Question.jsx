import React from 'react';
import classes from "./Question.module.css";
import {useDispatch} from "react-redux";
import {removeQuestion} from "../../../../store/testConstructorStore/testConstructorSlice";
import TextareaModule from "../TextareaModule/TextareaModule";
import ConstructorCheck from "../ConstructorCheck/ConstructorCheck";
import Answer from "../Answer/Answer";
import ConstructorButton from "../../../Buttons/ConstructorButton/ConstructorButton";
import {faCircleXmark} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


// Компонента Question отрисовывает поле с блоком "Вопрос"
const Question = ({
                      question,
                      changeWhatAnswerIsCorrect,
                      changeQuestionText,
                      checkTheoretical,
                      changeTheoreticalPartText
                  }) => {

    const dispatch = useDispatch();
    const answers = question.answers;
    const typeOfAnswers = question.typeOfAnswers;
    const multipleAnswersChecked = question.multipleAnswers;

    return (
        <fieldset>
            <legend>Вопрос {question.id}</legend>
            <div className={classes.buttonDelete} onClick={(e) => {
                const tergetId = e.target.id;
                return dispatch(removeQuestion({tergetId}))}
            }>
                <p id={question.id}>
                    Удалить вопрос
                </p>
                <FontAwesomeIcon icon={faCircleXmark}
                                 style={{margin: '1px 0 1px 5px', color: 'red', fontSize: '20px'}}/>
            </div>
            <label className={classes.test} htmlFor="question">Введите ваш вопрос:</label>
            <TextareaModule placeholderText={question.questionPlaceholder}
                            valueText={question.questionText}
                            rowsCount={5}
                            nameText={"question"}
                            idText={"question"}
                            questionId={question.id}
                            changeQuestionText={changeQuestionText}
                            id={`question=${question.id}`}
            />

            <ConstructorCheck
                text={'Несколько вариантов ответа'}
                multipleAnswersChecked={multipleAnswersChecked}
                questionId={question.id}
                id={'multipleAnswers'}
            />
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
                        correctText={answer.correctText}
                        changeWhatAnswerIsCorrect={changeWhatAnswerIsCorrect}
                        key={answer.id}
                    />


                })}
                <ConstructorButton
                    text={'Добавить ответ'}
                    id={question.id}
                />
            </div>
            <ConstructorCheck
                text={'Добавить теоретическую часть в ответ'}
                id={'theoretical'}
                questionId={question.id}
                checkTheoretical={checkTheoretical}
                isTheoreticalPart={question.isTheoreticalPart}
            />
            {question.isTheoreticalPart && <TextareaModule
            placeholderText={question.theoreticalPartPlaceholderText}
            valueText={question.theoreticalPartText}
            changeTheoreticalPartText={changeTheoreticalPartText}
            questionId={question.id}
            id={'theoretical'}
            />}

        </fieldset>
    );
};

export default Question;