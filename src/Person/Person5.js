import React from 'react';

const Person5 = (props) => {

    // Although we can define onClick for a text paragraph, we can not pass
    // the handler method defined in different file and different path.

    // The solution is that we can pass a reference to the handler as a property
    // into the component. This is a very commom pattern.
    return <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
}

export default Person5;
