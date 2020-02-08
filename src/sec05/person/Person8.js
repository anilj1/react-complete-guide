import React from 'react';

import './Person.css'

const Person8 = (props) => {

    return (
        <div className="Person">
            <p onClick={props.click}> I am {props.name} and my age is {props.age} years!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Person8;