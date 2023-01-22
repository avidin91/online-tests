import {createSlice} from "@reduxjs/toolkit";

const testConstructorSlice = createSlice({
    name: 'testConstructorState',
    initialState: {
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
    reducers: {
        // Метод addQuestion меняет состояние, добавляет новый вопрос.
        addQuestion(state, action) {
            const lastId = state.questions[state.questions.length -1].id;
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
            state.questions.push(newQuestion)
        },

        // Метод removeQuestion меняет состояние, удаляет вопрос.
        removeQuestion(state, action) {
            const questions = state.questions;
            const id = + action.payload.tergetId;
            if (state.questions.length !== 1) {
                const newQuestions = questions.filter(question => question.id !== id);

                for (let i=0; i < newQuestions.length; i++ ) {
                    if (newQuestions[i].id > id - 1) {
                        newQuestions[i].id = newQuestions[i].id - 1;
                    }
                }
                state.questions = newQuestions;

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
                state.questions[0] = newQuestion;

            }
        },

        // Метод addAnswer меняет состояние, обновляет состояние блока ответов на нажание по кнопке "Добавить ответ"
        addAnswer(state, action) {
            const questionId = + action.payload;
            const answers = state.questions[questionId - 1].answers;
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
            };

            if (lastId <= 7) {
                state.questions[questionId - 1].answers.push(newAnswer)
            }
        },

        // Метод removeAnswer меняет состояние, удаляет вопрос при нажатии на кнопку "Удалить"
        removeAnswer(state, action) {
            const questionId = action.payload.questionId
            const answers = state.questions[questionId - 1].answers;
            const id = + action.payload.targetId;
            state.questions[questionId - 1].answers = answers.filter(answer => answer.id !== id);
            // Цикл переприсваивает id, чтобы они шли по порядку при удалении.
            for (let i = 0; i < answers.length; i++) {
                if (answers[i].id >= (+ id + 1)) {
                    answers[i].id = answers[i].id - 1
                }
            }
        },

        // Метод changeValueText меняет состояние answers в зависимости от value textarea в блоке конструктора
        changeValueText (state, action) {
            const answers = state.questions[action.payload.questionId - 1].answers;
            const id = action.payload.targetId - 1; // Минус 1, чтобы получить индекс элемента массива ответов.
            answers[id].valueText = action.payload.targetValue
        },

        // Метод isChecked проверяет, выбрано ли несколько ответов multipleAnswers: true, и в зависимости от результата меняет состояние multipleAnswers и typeOfAnswers.
        isChecked(state, action) {
            const questionId = action.payload.questionId;
            state.questions[questionId-1].multipleAnswers = action.payload.checked;
            if(state.questions[questionId-1].multipleAnswers === true) {
                state.questions[questionId-1].typeOfAnswers = 'checkbox'
            } else {
                state.questions[questionId-1].typeOfAnswers = 'radio'
            }
        },

        // Метод changeWhatAnswerIsCorrect меняет состояние ответов, присваивает всем правильным ответам isCorrect: true. Если выбран правильный ответ, и ответ может быть один, делает остальные ответы неправильными.
        changeWhatAnswerIsCorrect(state, action) {
            const questionId = action.payload.questionId;
            const targetId = action.payload.targetId;
            const checked = action.payload.targetId;

            if (state.questions[questionId - 1].multipleAnswers === false) {
                state.questions[questionId - 1].answers.map(answer => {
                    answer.isCorrect = false
                    answer.correctText = 'Не правильный'
                    return answer
                })
                state.questions[action.payload.questionId - 1].answers[targetId - 1].isCorrect = checked
                if (state.questions[questionId - 1].answers[targetId - 1].isCorrect === false) {
                    state.questions[questionId - 1].answers[targetId - 1].correctText = 'Не правильный'
                } else {
                    state.questions[questionId - 1].answers[targetId - 1].correctText = 'Правильный'
                }
            } else {
                const newAnswer = {...state.questions[questionId - 1].answers[targetId - 1]}
                newAnswer.isCorrect = checked
                if (newAnswer.isCorrect === false) {
                    newAnswer.correctText = 'Не правильный'
                } else {
                    newAnswer.correctText = 'Правильный'
                }
                state.questions[questionId - 1].answers[targetId - 1] = newAnswer;
            }

        },
        //
        // // Метод changeTitleText меняет состояние. Изменяет заголовок теста.
        // changeTitleText(e) {
        //     const newTestConstructor = {...testConstructor};
        //     newTestConstructor.testTitleText = e.target.value;
        //     setTestConstructor(newTestConstructor)
        // },
        //
        // // Метод changeQuestionText меняет состояние. Изменяет название вопроса.
        // changeQuestionText (e, questionId) {
        //     const newTestConstructor = {...testConstructor};
        //     newTestConstructor.questions[questionId - 1] = {...newTestConstructor.questions[questionId - 1]}
        //     newTestConstructor.questions[questionId - 1].questionText = e.target.value
        //     setTestConstructor(newTestConstructor)
        // },
        //
        // // Метод checkTheoretical позволяет менять состояние чекмбокса с добавлением теоретической части. Убирает и ставит галочку.
        // checkTheoretical(e, questionId) {
        //     const newTestConstructor = {...testConstructor};
        //     const newQuestions = [...newTestConstructor.questions];
        //     newTestConstructor.questions = newQuestions;
        //     const newQuestion = {...newTestConstructor.questions[questionId-1]};
        //     newTestConstructor.questions[questionId-1] = newQuestion;
        //     newTestConstructor.questions[questionId-1].isTheoreticalPart = e.target.checked;
        //     if (newTestConstructor.questions[questionId-1].isTheoreticalPart === false) {
        //         newTestConstructor.questions[questionId-1].theoreticalPartText = '';
        //     }
        //     setTestConstructor(newTestConstructor)
        // },
        //
        // // Метод changeTheoreticalPartText меняет состояние. Позволяет менять текст теоретической части.
        // changeTheoreticalPartText (e, questionId) {
        //     const newTestConstructor = {...testConstructor};
        //     const newQuestions = [...newTestConstructor.questions];
        //     newTestConstructor.questions = newQuestions;
        //     const newQuestion = {...newTestConstructor.questions[questionId-1]};
        //     newTestConstructor.questions[questionId-1] = newQuestion;
        //     newTestConstructor.questions[questionId-1].theoreticalPartText = e.target.value;
        //     setTestConstructor(newTestConstructor)
        // },
        //
        // setTimer (e) {
        //     const newTestConstructor = {...testConstructor};
        //     newTestConstructor.forTime = e.target.checked;
        //     setTestConstructor(newTestConstructor)
        // },
    },
})

export default testConstructorSlice.reducer;
export const {addQuestion, removeQuestion, addAnswer, removeAnswer, changeValueText, isChecked, changeWhatAnswerIsCorrect, changeTitleText, changeQuestionText, checkTheoretical, changeTheoreticalPartText, setTimer} = testConstructorSlice.actions;