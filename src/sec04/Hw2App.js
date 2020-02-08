// Outputting conditional content and lists:
// =========================================
// 1. Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph)
// 2. Create a new component (=> ValidationComponent) which receives the text length as a prop
// 3. Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as min length)
// 4. Create another component (CharComponent) and style it as a inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black)
// 5. Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
// 6. When you click a CharComponent, it should be removed from the entered text.

// Hint: keep in mind that JavsScript strings are basically arrays!


// Additional instructions:
// ========================
// Follow the instructions explained in the problem video and try to implement a solution on your own. Compare it with my solution (video + downloadable files) thereafter.

// You'll also need to transform a string into a real array and then join it back into a string again to complete task 5 of the assignment.

// You can split a string into an array of its characters with the split('')  method. By passing just an empty string, it's split after every character.

// You may then re-create a string from that array by using join('')  - again, joining with an empty string as a separator.

// Questions for this assignment:
// ==============================
// What did you find most challenging and how did you overcome the challenge?


import React, { Component } from 'react';

import './App.css'
import InputText from './InputText';
import ValidationComponent from './ValidationComponent';
import Char from './Char/Char';

class Hw2App extends Component {

    state = {
        userInput: ''
    }

    nameChangeHandler = (event) => {
        this.setState({userInput: event.target.value})
    }

    charDeleteHandler = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({userInput: updatedText});
    }

    render() {

        const charList = this.state.userInput.split('').map((ch, index) => {
            return <Char 
                character={ch} 
                key={index}
                // Execute this as anynomous function as we are passing an argument.
                // It is executed only if we add a parenthesis () at the end of function call.
                clicked={() => this.charDeleteHandler(index)}/>;
        });

        return (
            <div className="App">
                <input
                    type="text"
                    onChange={this.nameChangeHandler}
                    value={this.state.userInput}/>
                    <p>{this.state.userInput}</p>
                    
                <ValidationComponent textLen={this.state.userInput.length}/>
                {charList}
            </div>
        );
    }
}

export default Hw2App