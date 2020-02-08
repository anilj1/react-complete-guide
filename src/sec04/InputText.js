import React from 'react';

import './InputText.css'

const InputText= (props) => {

    return (
        <div className="InputText">
            <input type="text" onChange={props.changed}/>
            <p>Length of the text is {props.name.length} chars</p>
        </div>
    )
}

export default InputText;
