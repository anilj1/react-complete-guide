import React, { Component } from 'react';
import './ValidationComponent.css';

const ValidationComponent = (props) => {

    let validationMessage = "Text long enough"

    if (props.textLen <=5) {
        validationMessage = "Text too short" 
    }

    return (
        <div>
              <p>{validationMessage}</p>
        </div>
    );
}

export default ValidationComponent
