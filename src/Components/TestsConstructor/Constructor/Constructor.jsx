import React from 'react';
import classes from "./Constructor.module.css";

import ConctructorCheck from "./ConctructorCheck/ConctructorCheck";
import ConstructorButton from "../../Buttons/ConstructorButton/ConstructorButton";
import TextareaModule from "./TextareaModule/TextareaModule";
import Question from "./Question/Question";
import PreviewScreen from "../PreviewScreen/PreviewScreen";

// Компонента Constructor отрисовывает блок с конструктором
const Constructor = ({testConstructor, addAnswer, removeAnswer, changeValueText, addQuestion, removeQuestion, changeWhatAnswerIsCorrect}) => {
    const questions = testConstructor.questions;

    return (
        <div className={classes.constructor}>
            <p className={classes.constructorHeadP}>
                Заполните поля для составления теста
            </p>
            <form action="">
                <fieldset>
                    <legend>Введите название теста</legend>
                    <TextareaModule placeholderText={testConstructor.testTitlePlaceholder}
                                    rowsCount={3}
                                    nameText={"title"}
                                    idText={"title"}
                    />
                </fieldset>
                <ConctructorCheck text={'Тест на время'}/>
            </form>
            <div>
                <form action="">
                    {questions.map(question => {
                        return <div key={question.id + 1000} className={classes.questionBlock}>
                                    <Question
                                        changeWhatAnswerIsCorrect={changeWhatAnswerIsCorrect}
                                        question={question}
                                        addAnswer={addAnswer}
                                        removeAnswer={removeAnswer}
                                        changeValueText={changeValueText}
                                        removeQuestion={removeQuestion}
                                        key={question.id}
                                    />
                                    <PreviewScreen
                                        testConstructor={testConstructor}
                                        key={question.id + 100}
                                    />
                                </div>

                    })}
                    <ConstructorButton
                        text={'Добавить вопрос'}
                        addQuestion={addQuestion}
                    />
                </form>
            </div>

        </div>
    );
};

export default Constructor;