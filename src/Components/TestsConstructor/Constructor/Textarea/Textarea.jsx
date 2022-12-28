import React from 'react';
import "./Textarea.module.css";

const Textarea = (props) => {
    return (

            <textarea
                name={props.nameText}
                id={props.idText}
                cols="76"
                rows={props.rowsCount}
                minLength='1'
                maxLength='1000'
                required={true}
                placeholder={props.placeholderText}
            >

            </textarea>
    );
};

export default Textarea;