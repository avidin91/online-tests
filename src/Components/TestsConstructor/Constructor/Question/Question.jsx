import TextareaModule from "../TextareaModule/TextareaModule";
import ConctructorCheck from "../ConctructorCheck/ConctructorCheck";
import classes from "./Question.module.css";
import Answer from "../Answer/Answer";
import ConstructorButton from "../../../Buttons/ConstructorButton/ConstructorButton";
import {faCircleXmark} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// Компонента Question отрисовывает поле с блоком "Вопрос"
const Question = ({
                      question,
                      addAnswer,
                      removeAnswer,
                      changeValueText,
                      removeQuestion,
                      changeWhatAnswerIsCorrect,
                      isChecked,
                      changeQuestionText
                  }) => {
    const answers = question.answers;
    const typeOfAnswers = question.typeOfAnswers;
    const multipleAnswersChecked = question.multipleAnswers;

    return (
        <fieldset>
            <legend>Вопрос {question.id}</legend>
            <div className={classes.buttonDelete} onClick={removeQuestion}>
                <p id={question.id}>
                    Удалить вопрос
                </p>
                <FontAwesomeIcon icon={faCircleXmark}
                                 style={{margin: '1px 0 1px 5px', color: 'red', fontSize: '20px'}}/>
            </div>
            <label className={classes.test} htmlFor="question">Введите ваш вопрос:</label>
            <TextareaModule placeholderText={question.questionPlaceholder}
                            valueText={question.questionText}
                            rowsCount={5}
                            nameText={"question"}
                            idText={"question"}
                            questionId={question.id}
                            changeQuestionText={changeQuestionText}
                            id={`question=${question.id}`}
            />

            <ConctructorCheck
                text={'Несколько вариантов ответа'}
                multipleAnswersChecked={multipleAnswersChecked}
                isChecked={isChecked}
                questionId={question.id}
            />
            <div>
                <p className={classes.answerP}>Добавьте варианты ответа</p>
                {answers.map((answer, index) => {
                    return <Answer
                        id={answer.id}
                        typeOfAnswers={typeOfAnswers}
                        questionId={question.id}
                        placeholderText={answer.placeholderText}
                        valueText={answer.valueText}
                        isCorrect={answer.isCorrect}
                        correctText={answer.correctText}
                        changeWhatAnswerIsCorrect={changeWhatAnswerIsCorrect}
                        key={answer.id}
                        changeValueText={changeValueText}
                        removeAnswer={removeAnswer}
                    />


                })}
                <ConstructorButton
                    addAnswer={addAnswer}
                    text={'Добавить ответ'}
                    id={question.id}
                />
            </div>
            <ConctructorCheck text={'Добавить теоретическую часть в ответ'}/>
        </fieldset>
    );
};

export default Question;