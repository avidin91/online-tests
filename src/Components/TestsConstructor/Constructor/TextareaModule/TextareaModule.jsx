import React from 'react';
import "./TextareaModule.module.css";

const TextareaModule = (props) => {
    return (

            <textarea
                name={props.nameText}
                id={props.idText}
                cols="93"
                rows={props.rowsCount}
                minLength='1'
                maxLength='1000'
                required={true}
                placeholder={props.placeholderText}
                value=''
            >

            </textarea>
    );
};

export default TextareaModule;