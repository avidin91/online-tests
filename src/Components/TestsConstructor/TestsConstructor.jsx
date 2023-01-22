import React, {useCallback, useState} from 'react';

import classes from "./TestsConstructor.module.css";
import Constructor from "./Constructor/Constructor";

// Компонента TestsConstructor отрисовывает окно конструктора тестов полностью, включая окноп предварительного просмотра
const TestsConstructor = () => {
    // State answers отвечает за состояние блока ответов
    const [testConstructor, setTestConstructor] = useState(

            {
                testTitleText: '',
                testTitlePlaceholder: 'Например: «Окружности в математике и геометрии "7 класс"»',
                forTime: false,
                timer: 0,
                questions: [
                    {
                        questionText: '',
                        questionPlaceholder: 'Например: «Что такое число Пи в математике?»',
                        id: 1,
                        multipleAnswers: false,
                        typeOfAnswers: 'radio',
                        isTheoreticalPart: false,
                        theoreticalPartPlaceholderText: 'Введите текст теоретической части...',
                        theoreticalPartText: '',
                        answers: [
                            {
                                id: 1,
                                placeholderText: 'Например: «Это половина длины окружности»',
                                valueText: '',
                                isCorrect: false,
                                correctText: 'Не правильный'
                            },
                            {
                                id: 2,
                                placeholderText: 'Например: «Математическая постоянная, равная отношению длины окружности к её диаметру»',
                                valueText: '',
                                isCorrect: true,
                                correctText: 'Правильный',
                            },
                        ],
                    }
                ]
            },

    );

    // Функция changeWhatAnswerIsCorrect меняет состояние ответов, присваивает всем правильным ответам isCorrect: true. Если выбран правильный ответ, и ответ может быть один, делает остальные ответы неправильными.
    const changeWhatAnswerIsCorrect = function (e, questionId) {
        const newTestConstructor = {...testConstructor}
        const newQuestion = {...newTestConstructor.questions[questionId - 1]}
        newTestConstructor.questions[questionId - 1] = newQuestion;
        if (newTestConstructor.questions[questionId - 1].multipleAnswers === false) {
            const newAnswer = newTestConstructor.questions[questionId - 1].answers.map(answer => {
                const newAnswerIn = {...answer};
                newAnswerIn.isCorrect = false
                newAnswerIn.correctText = 'Не правильный'

                return newAnswerIn
            })
            newTestConstructor.questions[questionId - 1].answers = newAnswer
            newTestConstructor.questions[questionId - 1].answers[e.target.id - 1].isCorrect = e.target.checked
            if (newTestConstructor.questions[questionId - 1].answers[e.target.id - 1].isCorrect === false) {
                newTestConstructor.questions[questionId - 1].answers[e.target.id - 1].correctText = 'Не правильный'
            } else {
                newTestConstructor.questions[questionId - 1].answers[e.target.id - 1].correctText = 'Правильный'
            }
            setTestConstructor(newTestConstructor)
        } else {
            const newAnswer = {...newTestConstructor.questions[questionId - 1].answers[e.target.id - 1]}
            newAnswer.isCorrect = e.target.checked
            if (newAnswer.isCorrect === false) {
                newAnswer.correctText = 'Не правильный'
            } else {
                newAnswer.correctText = 'Правильный'
            }
            newTestConstructor.questions[questionId - 1].answers[e.target.id - 1] = newAnswer;
            setTestConstructor(newTestConstructor)
        }

    }

    // Функция changeTitleText меняет состояние. Изменяет заголовок теста.
    const changeTitleText = function (e) {
        const newTestConstructor = {...testConstructor};
        newTestConstructor.testTitleText = e.target.value;
        setTestConstructor(newTestConstructor)
    }

    // Функция changeQuestionText меняет состояние. Изменяет название вопроса.
    const changeQuestionText = function (e, questionId) {
        const newTestConstructor = {...testConstructor};
        newTestConstructor.questions[questionId - 1] = {...newTestConstructor.questions[questionId - 1]}
        newTestConstructor.questions[questionId - 1].questionText = e.target.value
        setTestConstructor(newTestConstructor)
    }

    // Функция checkTheoretical позволяет менять состояние чекмбокса с добавлением теоретической части. Убирает и ставит галочку.
    const checkTheoretical = function (e, questionId) {
        const newTestConstructor = {...testConstructor};
        const newQuestions = [...newTestConstructor.questions];
        newTestConstructor.questions = newQuestions;
        const newQuestion = {...newTestConstructor.questions[questionId-1]};
        newTestConstructor.questions[questionId-1] = newQuestion;
        newTestConstructor.questions[questionId-1].isTheoreticalPart = e.target.checked;
        if (newTestConstructor.questions[questionId-1].isTheoreticalPart === false) {
            newTestConstructor.questions[questionId-1].theoreticalPartText = '';
        }
        setTestConstructor(newTestConstructor)
    }

    // Функция changeTheoreticalPartText меняет состояние. Позволяет менять текст теоретической части.
    const changeTheoreticalPartText = function (e, questionId) {
        const newTestConstructor = {...testConstructor};
        const newQuestions = [...newTestConstructor.questions];
        newTestConstructor.questions = newQuestions;
        const newQuestion = {...newTestConstructor.questions[questionId-1]};
        newTestConstructor.questions[questionId-1] = newQuestion;
        newTestConstructor.questions[questionId-1].theoreticalPartText = e.target.value;
        setTestConstructor(newTestConstructor)
    }

    const setTimer = function (e) {
        const newTestConstructor = {...testConstructor};
        newTestConstructor.forTime = e.target.checked;
        setTestConstructor(newTestConstructor)
    }

    return (
        <div className={classes.main}>
            <p className={classes.mainP} >
                Конструктор тестов
            </p>
            <div className={classes.position}>
                <Constructor
                    changeWhatAnswerIsCorrect={changeWhatAnswerIsCorrect}
                    changeTitleText={changeTitleText}
                    changeQuestionText={changeQuestionText}
                    checkTheoretical={checkTheoretical}
                    changeTheoreticalPartText={changeTheoreticalPartText}
                    setTimer={setTimer}
                />

            </div>
        </div>
    );
};

export default TestsConstructor;