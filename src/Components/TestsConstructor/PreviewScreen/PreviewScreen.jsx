import React from 'react';
import classes from "./PreviewScreen.module.css";
import PreviewScreenAnswer from "./PreviewScreenAnswer/PreviewScreenAnswer";

// Компонента PreviewScreen отображает предварительный просмотр заполненого теста
const PreviewScreen = ({testConstructor, questionId, question}) => {
    const questions = testConstructor.questions[0];
    const answers = testConstructor.questions[questionId-1].answers;

    // Функция checkFirstTitle убирает кавычки и слово "Например" из заголовка.
    const checkFirstTitle = function () {
        if (testConstructor.testTitlePlaceholder === 'Например: «Окружности в математике и геометрии "7класс"»') {
            return 'Окружности в математике и геометрии «7класс»'
        } else {
            return testConstructor.testTitlePlaceholder
        }
    }
    const firstTitle = checkFirstTitle()

    // Функция checkPlaceholder убирает кавычки и слово "Например" из названия вопроса.
    const checkPlaceholder = function () {
        if (question.questionPlaceholder === 'Например: «Что такое число Пи в математике?»') {
            return 'Что такое число Пи в математике?'
        } if (question.questionPlaceholder === 'Например: «Новый вопрос»') {
            return 'Новый вопрос'
        }
    }
    const newPlaceHolder = checkPlaceholder()

    return (
        <div className={classes.previewScreen}>
            <div className={classes.title}>
                <p>
                    {testConstructor.testTitleText ? testConstructor.testTitleText : firstTitle}
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
                        {question.questionText ? question.questionText : newPlaceHolder}
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