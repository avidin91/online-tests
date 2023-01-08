import React from 'react';
import "./TextareaModule.module.css";

const TextareaModule = ({
                            id,
                            questionId,
                            changeTitleText,
                            changeQuestionText,
                            changeTheoreticalPartText,
                            valueText,
                            nameText,
                            idText,
                            rowsCount,
                            placeholderText,
                        }) => {

    // Функция checkPropId проверяет какие пришли пропсы, и определяет, какую менять textarea
    const checkPropId = function (e) {
        if (id === 'testTitleText') {
            return changeTitleText(e)
        } if (id === `question=${questionId}`) {
            return changeQuestionText(e, questionId)
        } if (id === 'theoretical') {
            return changeTheoreticalPartText(e, questionId)
        }
    }

    return (

        <textarea
            name={nameText}
            id={idText}
            cols="93"
            rows={rowsCount}
            minLength='1'
            maxLength='1000'
            required={true}
            placeholder={placeholderText}
            value={valueText}
            onChange={(e) => checkPropId(e)}
        >

        </textarea>
    );
};

export default TextareaModule;