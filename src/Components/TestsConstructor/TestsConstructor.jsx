import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleQuestion, faSquarePlus} from "@fortawesome/free-regular-svg-icons";

import classes from "./TestsConstructor.module.css";


const TestsConstructor = () => {
    return (
        <div className={classes.main}>
            <p className={classes.mainP}>
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
                                    minlength='1'
                                    maxlength='1000'
                                    required='true'
                                    placeholder='Например: «Окружности в математике и геометри "7 класс"»'
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
                                minlength='1'
                                maxlength='1000'
                                required='true'
                                placeholder='Например: «Что такое число Пи в математике?»'
                            >

                            </textarea>
                            <div className={classes.check}>
                                <input type="checkbox" id="scales"/>
                                <label htmlFor="scales">Теста на время</label>
                                <div className={classes.iconAwesome}>
                                    <FontAwesomeIcon icon={faCircleQuestion} style={{margin: '0 10px'}}/>
                                </div>
                            </div>
                            <div className={classes.check}>
                                <input type="checkbox" id="scales"/>
                                <label htmlFor="scales">Несколько вариантов ответа</label>
                                <div className={classes.iconAwesome}>
                                    <FontAwesomeIcon icon={faCircleQuestion} style={{margin: '0 10px'}}/>
                                </div>
                            </div>
                            <div>
                                <p className={classes.answerP}>Добавьте варианты ответа</p>
                                <div className={classes.answer}>
                                    <label htmlFor="answer" className={classes.labelText}>
                                        <p>
                                            а)
                                        </p>
                                    </label>
                                    <textarea
                                        name="answer"
                                        id="answer"
                                        cols="58"
                                        rows="3"
                                        minlength='1'
                                        maxlength='1000'
                                        required='true'
                                        placeholder='Например: «Это половина длины окружности»'
                                    >

                                    </textarea>
                                    <div className={classes.buttonDeleteAnswer}>
                                        <p>
                                            Удалить
                                        </p>
                                    </div>
                                </div>
                                <div className={classes.answer}>
                                    <label htmlFor="answer" className={classes.labelText}>
                                        <p>
                                            б)
                                        </p>
                                    </label>
                                    <textarea
                                        name="answer"
                                        id="answer"
                                        cols="58"
                                        rows="3"
                                        minlength='1'
                                        maxlength='1000'
                                        required='true'
                                        placeholder='Например: «Математическая постоянная, равная отношению длины окружности к её диаметру»'
                                    >

                                    </textarea>
                                    <div className={classes.buttonDeleteAnswer}>
                                        <p>
                                            Удалить
                                        </p>
                                    </div>
                                </div>
                                <div className={classes.questionAdd}>
                                    <p>
                                        Добавить ответ
                                    </p>
                                </div>
                            </div>
                            <div className={classes.check}>

                                <input type="checkbox" id="scales"/>
                                <label htmlFor="scales">Добавить теоретическую часть в ответ</label>
                                <div className={classes.iconAwesome}>
                                    <FontAwesomeIcon icon={faCircleQuestion} style={{margin: '0 10px'}}/>
                                </div>
                            </div>
                        </fieldset>
                        <div className={classes.questionAdd}>
                            <p>
                                Добавить вопрос
                            </p>
                        </div>
                    </form>
                </div>
                <div className={classes.previewScreen}>

                </div>
            </div>


        </div>
    );
};

export default TestsConstructor;