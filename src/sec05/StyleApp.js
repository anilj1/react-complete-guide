import React, { Component } from 'react';
import './App.css';
import Person1 from './person/Person1';
import Person8 from './person/Person8';

// Class-based react components
class TextApp extends Component {

    state = {
        personsListInlineChange: [
            {id: 'add1', name: 'Alice', age: 30},
            {id: 'add2', name: 'Bumbum', age: 50},
            {id: 'add3', name: 'Third', age: 30},
            {id: 'add4', name: 'Forth', age: 40}
        ],
        fifthShowPerson: false
    }

    fifthToggleButtonHandler = () => {
        console.log('Fifth Toggle button from TextApp was clicked!');
        const doesShow = this.state.fifthShowPerson;
        this.setState({fifthShowPerson: !doesShow});
        console.log("Show fifth person flag: " + this.state.fifthShowPerson)
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
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '2px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

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

            // Example of setting the style dynamically. 
            style.backgroundColor = 'red'
        } else {
            fifthPerson = (
                <div>
                    <p></p>
                </div>
            );
        }

        // Example of dynamic modification of classes
        let myclasses = ['red', 'bold'].join(' ');
        let classes = [];
        if(this.state.personsListInlineChange.length <=2) {
            classes.push('red')
        }
        if (this.state.personsListInlineChange.length <=1) {
            classes.push('bold');
        }
        
        return (
            <div className="App">
                <h1>Hi, I am a react app.</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <Person1/>
                <button
                    style={style}
                    onClick={this.fifthToggleButtonHandler}>Fifth Toggle Button</button>
                { fifthPerson }
            </div>
        );
    }
}

export default TextApp;
