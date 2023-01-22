import React from 'react';
import classes from "./ConstructorCheck.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleQuestion} from "@fortawesome/free-regular-svg-icons";
import {useDispatch} from "react-redux";
import {isChecked} from "../../../../store/testConstructorStore/testConstructorSlice";

const ConstructorCheck = (props) => {
    const dispatch = useDispatch();


    // Функция checkPropsForFunctions проверяет из какого чекбокса пришли пропсы, и запускает соотвествующую функцию
    const checkPropsForFunctions = function (e, questionId) {
        const checked = e.target.checked;

        if (props.id === 'theoretical') {
            return props.checkTheoretical(e, questionId)
        } if (props.id === 'multipleAnswers') {
            return dispatch(isChecked({checked, questionId}))
        } if (props.id === 'timer') {
            return props.setTimer(e)
        }
    }

    // Функция checkPropsForChecked проверяет из какого чекбокса пришли пропсы, и проставляет checked в зависимости от состояния
    const checkPropsForChecked = function () {
        if (props.id === 'theoretical') {
            return props.isTheoreticalPart
        } if (props.id === 'multipleAnswers') {
            return props.multipleAnswersChecked
        } if (props.id === 'timer') {
            return props.forTime
        }
    }

    return (
        <div className={classes.check}>
            <input type="checkbox" onChange={(e)=>{checkPropsForFunctions(e, props.questionId)}} checked={checkPropsForChecked()}/>
            <label htmlFor="scales">{props.text}</label>
            <div className={classes.iconAwesome}>
                <FontAwesomeIcon icon={faCircleQuestion} style={{margin: '0 10px'}}/>
            </div>
        </div>
    );
};

export default ConstructorCheck;