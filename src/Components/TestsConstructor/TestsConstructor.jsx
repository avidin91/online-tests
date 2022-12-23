import React, {useState} from 'react';

import classes from "./TestsConstructor.module.css";
import PreviewScreen from "./PreviewScreen/PreviewScreen";
import Question from "./Question/Question";
import ConstructorButton from "../Buttons/ConstructorButton/ConstructorButton";
import ConctructorCheck from "./ConctructorCheck/ConctructorCheck";


const TestsConstructor = () => {
    const [questions, setQuestions] = useState(
        [
            {
                id: 1,
                placeholderText: 'Например: «Это половина длины окружности»',
                text: '',
            },
            {
                id: 2,
                placeholderText: 'Например: «Математическая постоянная, равная отношению длины окружности к её диаметру»',
                text: 'Привет',
            },
        ]
    );

    const addQuestion = function() {
        const lastId = questions[questions.length - 1].id;
        if (lastId <= 7) {
            const newId = lastId + 1;
            setQuestions(
                [...questions,
                    {
                        id: newId,
                        placeholderText: 'Введите текст...',
                        text: '',
                    },
                ]
            )
        }
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
                                {questions.map((question, index) => {
                                    return <Question
                                        id={question.id}
                                        placeholderText={question.placeholderText}
                                        text={question.text}
                                        key={index}/>
                                })}
                                <ConstructorButton addQuestion={addQuestion} text={'Добавить ответ'}/>
                            </div>
                            <ConctructorCheck text={'Добавить теоретическую часть в ответ'}/>
                        </fieldset>
                        <ConstructorButton text={'Добавить вопрос'}/>
                    </form>
                </div>
                    <PreviewScreen questions={questions}/>
            </div>


        </div>
    );
};

export default TestsConstructor;