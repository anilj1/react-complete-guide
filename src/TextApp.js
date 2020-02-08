import React, { Component } from 'react';
import './App.css';
import Person1 from './Person/Person1';
import Person2 from './Person/Person2';
import Person3 from './Person/Person3';
import Person4 from './Person/Person4';
import Person5 from './Person/Person5';
import Person6 from './Person/Person6';
import Person7 from './Person/Person7';
import Person8 from './Person/Person8';

// Class-based react components
class TextApp extends Component {

    state = {
        personsList: [
            {id: 'add1', name: 'Alice', age: 30},
            {id: 'add2', name: 'Bumbum', age: 50},
            {id: 'add3', name: 'Third', age: 30},
            {id: 'add4', name: 'Forth', age: 40}
        ],
        personsListInlineChange: [
            {id: 'add1', name: 'Alice', age: 30},
            {id: 'add2', name: 'Bumbum', age: 50},
            {id: 'add3', name: 'Third', age: 30},
            {id: 'add4', name: 'Forth', age: 40}
        ],
        persons: [
            {name: 'Alice', age: 30},
            {name: 'Bumbum', age: 50},
            {name: 'Third', age: 30},
            {name: 'Forth', age: 40}
        ],
        otherState: 'some other state value',
        firstShowPerson: false,
        secondShowPerson: false,
        thirdShowPerson: false,
        fourthShowPerson: false,
        fifthShowPerson: false
    }

    /*  It is also possible to pass a 'name' argument which wouldupdate the name to be changed.
        We pass it as argument to the switchHandler method.
    */
    switchNameHandler = (newName) => {
        console.log('Switch Name from TextApp was clicked!');
        // DO NOT DO THIS this.state.persons[0].age = 44;
        this.setState({
            persons: [
                {name: newName, age: 50},
                {name: 'Bumbum', age: 50}
            ]
        })
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Alice', age: 50},
                {name: event.target.value, age: 50}
            ]
        })
    }

    firstToggleButtonHandler = () => {
        console.log('First Toggle button from TextApp was clicked!');
        const doesShow = this.state.firstShowPerson;
        this.setState({firstShowPerson: !doesShow});
        console.log("Show first person flag: " + this.state.firstShowPerson)
    }

    secondToggleButtonHandler = () => {
        console.log('Second Toggle button from TextApp was clicked!');
        const doesShow = this.state.secondShowPerson;
        this.setState({secondShowPerson: !doesShow});
        console.log("Show second person flag: " + this.state.secondShowPerson)
    }

    thirdToggleButtonHandler = () => {
        console.log('Third Toggle button from TextApp was clicked!');
        const doesShow = this.state.thirdShowPerson;
        this.setState({thirdShowPerson: !doesShow});
        console.log("Show third person flag: " + this.state.thirdShowPerson)
    }

    fourthToggleButtonHandler = () => {
        console.log('Fourth Toggle button from TextApp was clicked!');
        const doesShow = this.state.fourthShowPerson;
        this.setState({fourthShowPerson: !doesShow});
        console.log("Show fourth person flag: " + this.state.fourthShowPerson)
    }

    fifthToggleButtonHandler = () => {
        console.log('Fifth Toggle button from TextApp was clicked!');
        const doesShow = this.state.fifthShowPerson;
        this.setState({fifthShowPerson: !doesShow});
        console.log("Show fifth person flag: " + this.state.fifthShowPerson)
    }
    
    nameDeleteHandler = (index) => {
        // If we use the this.state.persons array, below, it modifies the 
        // original array itself. This is flawed approach. 
        // THIS IS THE REASON Person5 rendering was crashing!!!
        // We can create a local copy first for the modification, which later
        // can be updated to the main array as done below. 
        // There are two ways to create a local copy of an array
        // 1. using the slice() method, as shown in commented line.
        // 2. using the spread operator of JSX, as done below.
        console.log("Deleting index ", index)
        //const persons = this.state.personsList.slice();
        const persons = [...this.state.personsList]
        persons.splice(index, 1);
        this.setState({personsList: persons});
    }

    nameDeleteHandlerWithTextChange = (index) => {
        // If we use the this.state.persons array, below, it modifies the 
        // original array itself. This is flawed approach. 
        // THIS IS THE REASON Person5 rendering was crashing!!!
        // We can create a local copy first for the modification, which later
        // can be updated to the main array as done below. 
        // There are two ways to create a local copy of an array
        // 1. using the slice() method, as shown in commented line.
        // 2. using the spread operator of JSX, as done below.
        console.log("Deleting index ", index)
        //const persons = this.state.personsList.slice();
        const persons = [...this.state.personsListInlineChange]
        persons.splice(index, 1);
        this.setState({personsListInlineChange: persons});
    }

    listItemNameChangeHandler = (event, id) => {
        // If we use the this.state.persons array, below, it modifies the 
        // original array itself. This is flawed approach. 
        // THIS IS THE REASON Person5 rendering was crashing!!!
        // We can create a local copy first for the modification, which later
        // can be updated to the main array as done below. 
        // There are two ways to create a local copy of an array
        // 1. using the slice() method, as shown in commented line.
        // 2. using the spread operator of JSX, as done below.
        //const persons = this.state.personsList.slice();
        const personIndex = this.state.personsListInlineChange.findIndex(per => {
            return per.id === id;
        });

        const indexedPerson = {
            ...this.state.personsListInlineChange[personIndex]
        };

        // Alternative approach
        // const indexedPerson = Object.assign({}, this.state.personsList[personIndex]);

        indexedPerson.name = event.target.value;
        const persons = [...this.state.personsListInlineChange]
        persons[personIndex] = indexedPerson;

        this.setState({personsListInlineChange: persons});
    }

/* In this example, we not only want to have a button-based change,
   but we also want to change text on clicking a paragraph text. */

/* We pass the reference to the function as a property - same as done in above case.
   Now we can use this property in Person5.js */

/*  KEY LEARNING: we can pass method as property so that we can call method
    that (might) change the state in another component which does not have
    direct access or shouldn't have direct access to the state.
    This allows to pass click handler that allows to change the data in parent
    component from the child component.
*/
    render() {

        // Inline styling is done as follows
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '2px solid blue',
            passing: '8px',
            cursor: 'pointer'
        };

        let secondPerson = null;
        if (this.state.secondShowPerson) {
            secondPerson = (
                <div>
                    <Person2/>
                </div>
            );
        } else {
            secondPerson = (
                <div>
                    <p></p>
                </div>
            );
        }

        let thirdPerson = null;
        if (this.state.thirdShowPerson) {
            thirdPerson = (
                <div>
                    {
                        this.state.persons.map(person => {
                            return <Person2
                                name={person.name}
                                age={person.age}/>
                        })
                    }
                </div>
            );
        } else {
            thirdPerson = (
                <div>
                    <p></p>
                </div>
            );
        }

        let fourthPerson = null;
        if (this.state.fourthShowPerson) {
            fourthPerson = (
                <div>
                    {
                        this.state.personsList.map((person, index) => {
                            return <Person7
                                // Use the arrow function when passing 
                                // the argument to handler function.
                                click={() => this.nameDeleteHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}/>
                        })
                    }
                </div>
            );
        } else {
            fourthPerson = (
                <div>
                    <p></p>
                </div>
            );
        }

        let fifthPerson = null;
        if (this.state.fifthShowPerson) {
            fifthPerson = (
                <div>
                    {
                        this.state.personsListInlineChange.map((person, index) => {
                            return <Person8
                                // Use the arrow function when passing 
                                // the argument to handler function.
                                click={() => this.nameDeleteHandlerWithTextChange(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={(event) => this.listItemNameChangeHandler(event, person.id)}/>
                        })
                    }
                </div>
            );
        } else {
            fifthPerson = (
                <div>
                    <p></p>
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I am a react app.</h1>
                <Person1/>
                <Person2/>
                <Person3 name="Anna" age="23"/>
                <Person4 name="Bob" age="33">My hobby is: racing</Person4>
                <Person3
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>

                <button
                    style={style}
                    // Execute this as anynomous function as we are passing an argument.
                    // It is executed only if we add a parenthesis () at the end of function call.
                    onClick={() => this.switchNameHandler('arg-based-new-name-1')}>Switch Name</button>

                <Person5
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'arg-based-new-name-2')}/>

                <Person6
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    changed={this.nameChangeHandler}/>

                <button
                    style={style}
                    onClick={this.firstToggleButtonHandler}>First Toggle Button</button>
                { this.state.firstShowPerson ? 
                    <div>
                        <Person1/>
                    </div> : 
                    <div>
                        <p></p>
                    </div>
                }
                <button
                    style={style}
                    onClick={this.secondToggleButtonHandler}>Second Toggle Button</button>
                { secondPerson }

                <button
                    style={style}
                    onClick={this.thirdToggleButtonHandler}>Third Toggle Button</button>
                { thirdPerson }

                <button
                    style={style}
                    onClick={this.fourthToggleButtonHandler}>Fourth Toggle Button</button>
                { fourthPerson }

                <button
                    style={style}
                    onClick={this.fifthToggleButtonHandler}>Fifth Toggle Button</button>
                { fifthPerson }
            </div>
        );
    }
}

export default TextApp;
