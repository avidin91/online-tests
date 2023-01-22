import classes from "./Answer.module.css";
import ConstructorButton from "../../../Buttons/ConstructorButton/ConstructorButton";
import {useDispatch} from "react-redux";
import {changeValueText, changeWhatAnswerIsCorrect} from "../../../../store/testConstructorStore/testConstructorSlice";

// Компонента Answer отрисовывает блок с ответами
const Answer = (props) => {
    const dispatch = useDispatch();

    // Функция number проставляет буквенное значение в блоке с вопросов в зависимости от пришедшего id
    const number = function () {
        if (props.id === 1) {
            return 'а)'
        }
        if (props.id === 2) {
            return 'б)'
        }
        if (props.id === 3) {
            return 'в)'
        }
        if (props.id === 4) {
            return 'г)'
        }
        if (props.id === 5) {
            return 'д)'
        }
        if (props.id === 6) {
            return 'е)'
        }
        if (props.id === 7) {
            return 'ж)'
        }
        if (props.id === 8) {
            return 'з)'
        }
    }

    // Функция valueText проверяет, приходит ли текст в значение value, и если нет, то оставляет пустую строку. Тогда в блоке вопроса отображается значение из Placeholder.
    const valueText = function () {
        if (props.valueText !== '') {
            return props.valueText
        } else {
            return ''
        }
    }

    // Функция bgc получает пропсы checked. И если true, то делает фон правильного ответа зелёным.
    const bgc = function () {
        if (props.isCorrect === true) {
            return {backgroundColor: '#7af392'}
        } else {
            return ''
        };
    }
    const BgcStyle = bgc()

    // Функция fwb получает пропсы checked. И если true, то делает span жирным.
    const fwb = function () {
        if (props.isCorrect === true) {
            return {fontWeight: 'bold'}
        } else {
            return ''
        };
    }
    const fWStyle = fwb()

    const questionId = props.questionId

    return (
        <div className={classes.answer} style={{...BgcStyle}} >
            <label htmlFor="answer">
                <div className={classes.chooseAnswerBlock}>
                    <p>
                        {number()}
                    </p>
                    <div className={classes.chooseBlock}>
                        <input type={props.typeOfAnswers}
                               name={'answer' + props.questionId}
                               checked={props.isCorrect}
                               id={props.id}
                               onChange={(e)=>{
                                   const questionId = props.questionId;
                                   const targetId = e.target.id;
                                   const checked = e.target.checked;
                                   return dispatch(changeWhatAnswerIsCorrect({targetId, questionId, checked}))
                               }}
                        />
                        <span style={{...fWStyle}}>
                            {props.correctText}
                        </span>
                    </div>
                </div>
            </label>
            <textarea
                name="answer"
                cols="62"
                rows="3"
                minLength='1'
                maxLength='1000'
                required={true}
                id={props.id}
                placeholder={props.placeholderText}
                value={valueText()}
                onChange={(e) => {
                    const targetId = e.target.id;
                    const targetValue = e.target.value
                    return dispatch(changeValueText({targetId, targetValue, questionId}))
                }}
            >

            </textarea>
            <ConstructorButton
                text={'Удалить'}
                id={props.id}
                questionId={props.questionId}
            />
        </div>
    );
};

export default Answer;