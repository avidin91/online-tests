import React from 'react';
import classes from "./PreviewScreen.module.css";
import PreviewScreenAnswer from "./PreviewScreenAnswer/PreviewScreenAnswer";

// Компонента PreviewScreen отображает предварительный просмотр заполненого теста

const PreviewScreen = ({testConstructor, questionId}) => {
    const questions = testConstructor.questions[0];
    const answers = questions.answers;

    return (
        <div className={classes.previewScreen}>
            <div className={classes.title}>
                <p>
                    Окружности в математике и геометрии "7 класс"
                </p>
            </div>
            <div className={classes.questionBlock}>
                <div>
                    <p>
                        Вопрос <span>{questionId}</span> из <span>{testConstructor.questions.length}</span>
                    </p>
                </div>
                <div>
                    <p className={classes.questionTitle}>
                        Что такое число Пи в математике?
                    </p>
                </div>
                {answers.map((answer, index) => {
                    return <PreviewScreenAnswer
                        placeholderText={answer.placeholderText}
                        valueText={answer.valueText}
                        key={index}
                        id={answer.id}/>
                })}
            </div>

        </div>
    );
};

export default PreviewScreen;