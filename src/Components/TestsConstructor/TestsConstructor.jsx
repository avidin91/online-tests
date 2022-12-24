import React, {useState} from 'react';

import classes from "./TestsConstructor.module.css";
import PreviewScreen from "./PreviewScreen/PreviewScreen";
import Question from "./Question/Question";
import ConstructorButton from "../Buttons/ConstructorButton/ConstructorButton";
import ConctructorCheck from "./ConctructorCheck/ConctructorCheck";
import question from "./Question/Question";

// Компонента TestsConstructor отрисовывает окно конструктора тестов полностью, включая окноп предварительного просмотра
const TestsConstructor = () => {

    // State answers отвечает за состояние блока ответов
    const [answers, setAnswers] = useState(
        [
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
        ]
    );

    // Функция addAnswer обновляет состояние блока ответов на нажание по кнопке "Добавить ответ"
    const addAnswer = function() {
        const lastId = answers[answers.length - 1].id;
        if (lastId <= 7) {
            const newId = lastId + 1;
            setAnswers(
                [...answers,
                    {
                        id: newId,
                        placeholderText: 'Введите текст...',
                        valueText: '',
                    },
                ]
            )
        }
    }

    // Функция removeAnswer удаляет вопрос при нажатии на кнопку "Удалить"
    const removeAnswer = function(e) {
        const id = e.target.id;
        const newAnswers = answers.filter(answer => answer.id != id);
        newAnswers.map(answer => {
            if (answer.id >= (+ id + 1)) {
                return answer.id = answer.id - 1
            }
        })
        setAnswers(newAnswers)
    }

    // Функцмя changeValueText меняет состояние answers в зависимости от value textarea в блоке конструктора
    const changeValueText = function(e) {
        const id = e.target.id - 1;
        const newAnswers = [...answers];
        newAnswers[id].valueText = e.target.value
        setAnswers(newAnswers);
    }

    return (
        <div className={classes.main}>
            <p className={classes.mainP} >
                Конструктор тестов
            </p>
            <div className={classes.position}>
                <div className={classes.constructor}>
                    <p className={classes.constructorHeadP}>
                        Заполните поля для составления теста
                    </p>
                    <form action="">
                        <fieldset>
                            <legend>Введите название теста</legend>
                            <textarea
                                name="title"
                                id="title"
                                cols="76"
                                rows="3"
                                minLength='1'
                                maxLength='1000'
                                required={true}
                                placeholder='Например: «Окружности в математике и геометрии "7 класс"»'
                            >

                                </textarea>
                        </fieldset>
                        <fieldset>
                            <legend>Вопрос 1</legend>
                            <label htmlFor="question">Введите ваш вопрос:</label>
                            <textarea
                                name="question"
                                id="question"
                                cols="76"
                                rows="6"
                                minLength='1'
                                maxLength='1000'
                                required={true}
                                placeholder='Например: «Что такое число Пи в математике?»'
                            >

                            </textarea>
                            <ConctructorCheck text={'Теста на время'}/>
                            <ConctructorCheck text={'Несколько вариантов ответа'}/>
                            <div>
                                <p className={classes.answerP}>Добавьте варианты ответа</p>
                                {answers.map((answer, index) => {
                                    return <Question
                                        id={answer.id}
                                        placeholderText={answer.placeholderText}
                                        valueText={answer.valueText}
                                        key={answer.id}
                                        changeValueText={changeValueText}
                                        removeAnswer={removeAnswer}
                                    />


                                })}
                                <ConstructorButton addAnswer={addAnswer} text={'Добавить ответ'}/>
                            </div>
                            <ConctructorCheck text={'Добавить теоретическую часть в ответ'}/>
                        </fieldset>
                        <ConstructorButton text={'Добавить вопрос'}/>
                    </form>
                </div>
                    <PreviewScreen answers={answers}/>
            </div>
        </div>
    );
};

export default TestsConstructor;