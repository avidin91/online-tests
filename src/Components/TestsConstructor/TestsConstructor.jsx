import React, {useState} from 'react';

import classes from "./TestsConstructor.module.css";
import PreviewScreen from "./PreviewScreen/PreviewScreen";
import Constructor from "./Constructor/Constructor";

// Компонента TestsConstructor отрисовывает окно конструктора тестов полностью, включая окноп предварительного просмотра
const TestsConstructor = () => {

    // State answers отвечает за состояние блока ответов
    const [testConstructor, setTestConstructor] = useState(

            {
                testTitleText: '',
                testTitlePlaceholder: 'Например: «Окружности в математике и геометрии "7класс"»',
                questions: [
                    {
                        questionText: '',
                        questionPlaceholder: 'Например: «Что такое число Пи в математике?»',
                        id: 1,
                        answers: [
                            {
                                id: 1,
                                placeholderText: 'Например: «Это половина длины окружности»',
                                valueText: '',
                            },
                            {
                                id: 2,
                                placeholderText: 'Например: «Математическая постоянная, равная отношению длины окружности к её диаметру»',
                                valueText: '',
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
            questionPlaceholder: 'Например: «Второй вопрос»',
            id: newId,
            answers: [
                {
                    id: 1,
                    placeholderText: 'Введите текст...',
                    valueText: '',
                },
                {
                    id: 2,
                    placeholderText: 'Введите текст...',
                    valueText: '',
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
                answers: [
                    {
                        id: 1,
                        placeholderText: 'Введите текст...',
                        valueText: '',
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
                />

            </div>
        </div>
    );
};

export default TestsConstructor;