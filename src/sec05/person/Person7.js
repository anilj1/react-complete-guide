import React from 'react';

const Person7 = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}> I am {props.name} and my age is {props.age} years!</p>
        </div>
    )
}

export default Person7;