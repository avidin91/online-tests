import React from 'react';
import classes from "./Constructor.module.css";

import ConctructorCheck from "./ConctructorCheck/ConctructorCheck";
import ConstructorButton from "../../Buttons/ConstructorButton/ConstructorButton";
import Textarea from "./Textarea/Textarea";
import Question from "./Question/Question";

// Компонента Constructor отрисовывает блок с конструктором
const Constructor = ({testConstructor, addAnswer, removeAnswer, changeValueText, addQuestion, removeQuestion}) => {
    const questions = testConstructor.questions;

    return (
            <div className={classes.constructor}>
                <p className={classes.constructorHeadP}>
                    Заполните поля для составления теста
                </p>
                <form action="">
                    <fieldset>
                        <legend>Введите название теста</legend>
                        <Textarea placeholderText={testConstructor.testTitlePlaceholder}
                                  rowsCount={3}
                                  nameText={"title"}
                                  idText={"title"}
                        />
                    </fieldset>
                    <ConctructorCheck text={'Тест на время'}/>
                    {questions.map(question => {
                        return <Question
                            testConstructor={testConstructor}
                            question={question}
                            addAnswer={addAnswer}
                            removeAnswer={removeAnswer}
                            changeValueText={changeValueText}
                            removeQuestion={removeQuestion}
                            key={question.id}
                        />
                    })}
                    <ConstructorButton
                        text={'Добавить вопрос'}
                        addQuestion={addQuestion}
                    />
                </form>
            </div>
    );
};

export default Constructor;