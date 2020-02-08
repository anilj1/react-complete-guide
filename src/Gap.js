import React, { useState } from 'react';
import './App.css';
import Person1 from './Person/Person1';
import Person2 from './Person/Person2';
import Person3 from './Person/Person3';
import Person4 from './Person/Person4';


// Function based react components
const Gap = props => {

    const [ personsState, setPersonsState ] = useState({
        persons: [
            {name: 'Alice', age: 30}
        ],
        otherState: 'some other state value'
    });

    // More elegant way to populate the other state is to use useState
    // Also use array destructuring to collect the values.
//     const [otherState, setOtherState ] = useState({otherState: 'some other state value'});
//     console.log(personsState, otherState);
    // React hooks are all about multiple use* statetments. They allow to add
    // functionality to the function-based react components.

    console.log(personsState);

    // When using react hooks, i.e. the function-based react component,
    // the state information does not merge with but replaces the old state.
    // So, it is super important that we manually include all old state data.
    const switchNameHandler = () => {
         console.log('Switch Name from Gap was clicked!');
         // DO NOT DO THIS this.state.persons[0].age = 44;
         setPersonsState({
             persons: [
                 {name: 'Alice-baba', age: 50}
             ],
             otherState: personsState.otherState
         })
    }

    return (
        <div className="App">
            <h1>Hi, I am a react gap.</h1>
            <Person1/>
            <Person2/>
            <Person3 name="Anna" age="23"/>
            <Person4 name="Bob" age="33">My hobby is: racing</Person4>
            <Person3 name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <button onClick={switchNameHandler}>Switch Name</button>
        </div>
    );
}

export default Gap;
