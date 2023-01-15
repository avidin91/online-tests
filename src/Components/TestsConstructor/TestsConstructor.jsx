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

    // Функция addQuestion меняет состояние, добавляет новый вопрос.
    const addQuestion = function () {
        const newTestConstructor = {...testConstructor};
        const lastId = testConstructor.questions[testConstructor.questions.length -1].id;
        const newId = lastId + 1;
        const newQuestion = {
            questionText: '',
            questionPlaceholder: 'Например: «Новый вопрос»',
            id: newId,
            multipleAnswers: false,
            typeOfAnswers: 'radio',
            isTheoreticalPart: false,
            theoreticalPartPlaceholderText: 'Введите текст теоретической части...',
            theoreticalPartText: '',
            answers: [
                {
                    id: 1,
                    placeholderText: 'Введите текст...',
                    valueText: '',
                    isCorrect: false,
                    correctText: 'Не правильный'
                },
                {
                    id: 2,
                    placeholderText: 'Введите текст...',
                    valueText: '',
                    isCorrect: false,
                    correctText: 'Не правильный'
                },
            ],
        };
        newTestConstructor.questions = [...newTestConstructor.questions,newQuestion]
        setTestConstructor(newTestConstructor)
    };

    // Функция removeQuestion меняет состояние, удаляет вопрос.
    const removeQuestion = function(e) {
        const newTestConstructor = {...testConstructor};
        const questions = testConstructor.questions;
        const id = + e.target.id;
        if (newTestConstructor.questions.length !== 1) {
            const questionsMap = questions.map(question => {
                return {...question}
            });
            const newQuestions = questionsMap.filter(question => question.id !== id);

            for (let i=0; i < newQuestions.length; i++ ) {
                if (newQuestions[i].id > id - 1) {
                    newQuestions[i].id = newQuestions[i].id - 1;
                }
            }
            newTestConstructor.questions = newQuestions;
            setTestConstructor(newTestConstructor)
        } else {
            const newQuestion = {
                questionText: '',
                questionPlaceholder: 'Первый вопрос',
                id: 1,
                multipleAnswers: false,
                typeOfAnswers: 'radio',
                isTheoreticalPart: false,
                theoreticalPartPlaceholderText: 'Введите текст теоретической части...',
                theoreticalPartText: '',
                answers: [
                    {
                        id: 1,
                        placeholderText: 'Введите текст...',
                        valueText: '',
                        isCorrect: false,
                        correctText: 'Не правильный'
                    },
                ],
            };
            newTestConstructor.questions[0] = newQuestion;
            setTestConstructor(newTestConstructor)
        }
    };

    // Функция addAnswer меняет состояние, обновляет состояние блока ответов на нажание по кнопке "Добавить ответ"
    const addAnswer = function(e) {
        const questionId = + e.target.id;
        const newTestConstructor = {...testConstructor};
        const answers = testConstructor.questions[questionId - 1].answers;
        let lastId;
        if (answers.length === 0) {
            lastId = 0
        } else {
            lastId = answers[answers.length - 1].id;
        }
        const newId = lastId + 1;
        const newAnswer = {
            id: newId,
            placeholderText: 'Введите текст...',
            valueText: '',
            isCorrect: false,
            correctText: 'Не правильный'
        }
        const newAnswers = [...answers, newAnswer];
        newTestConstructor.questions[questionId - 1].answers = newAnswers
        if (lastId <= 7) {
            setTestConstructor(newTestConstructor)
        }
    }

    // Функция removeAnswer меняет состояние, удаляет вопрос при нажатии на кнопку "Удалить"
    const removeAnswer = function(e, questionId) {
        const newTestConstructor = {...testConstructor};
        const answers = testConstructor.questions[questionId - 1].answers;
        const id = + e.target.id;
        const answersMap = answers.map(answer => {
            return {...answer}
        })
        const newAnswers = answersMap.filter(answer => answer.id !== id);
        newTestConstructor.questions[questionId - 1].answers = newAnswers
        // Цикл переприсваивает id, чтобы они шли по порядку при удалении.
        for (let i = 0; i < newAnswers.length; i++) {
             if (newAnswers[i].id >= (+ id + 1)) {
                 newAnswers[i].id = newAnswers[i].id - 1
             }
        }
        setTestConstructor(newTestConstructor)
    }

    // Функция changeValueText меняет состояние answers в зависимости от value textarea в блоке конструктора
    const changeValueText = function(e, questionId) {
        const newTestConstructor = {...testConstructor};
        const answers = testConstructor.questions[questionId - 1].answers;
        const id = e.target.id - 1; // Минус 1, чтобы получить индекс элемента массива ответов.
        const newAnswers = [...answers];
        newAnswers[id].valueText = e.target.value
        setTestConstructor(newTestConstructor);
    }

    // Функция isChecked проверяет, выбрано ли несколько ответов multipleAnswers: true, и в зависимости от результата меняет состояние multipleAnswers и typeOfAnswers.
    const isChecked = useCallback(function (e, questionId) {
        const newTestConstructor = {...testConstructor};
        newTestConstructor.questions[questionId-1] = {...newTestConstructor.questions[questionId-1]}
        newTestConstructor.questions[questionId-1].multipleAnswers = e.target.checked
        if(newTestConstructor.questions[questionId-1].multipleAnswers === true) {
            newTestConstructor.questions[questionId-1].typeOfAnswers = 'checkbox'
        } else {
            newTestConstructor.questions[questionId-1].typeOfAnswers = 'radio'
        }
        setTestConstructor(newTestConstructor)

    },[])

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
                    testConstructor={testConstructor}
                    addAnswer={addAnswer}
                    removeAnswer={removeAnswer}
                    changeValueText={changeValueText}
                    addQuestion={addQuestion}
                    removeQuestion={removeQuestion}
                    isChecked={isChecked}
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