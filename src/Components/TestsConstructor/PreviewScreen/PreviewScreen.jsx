import React from 'react';
import classes from "./PreviewScreen.module.css";
import PreviewScreenAnswer from "./PreviewScreenAnswer/PreviewScreenAnswer";

const PreviewScreen = (props) => {
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
                        Вопрос <span>1</span> из <span>30</span>
                    </p>
                </div>
                <div>
                    <p className={classes.questionTitle}>
                        Что такое число Пи в математике?
                    </p>
                </div>
                {props.questions.map((question, index) => {
                    return <PreviewScreenAnswer
                        placeholderText={question.placeholderText}
                        text={question.text}
                        key={index}
                        id={question.id}/>
                })}
            </div>

        </div>
    );
};

export default PreviewScreen;