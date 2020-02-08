import React, { Component } from 'react';
import './App.css';
import Person1 from './Person/Person1';
import Person2 from './Person/Person2';
import Person3 from './Person/Person3';
import Person4 from './Person/Person4';


// Class-based react components
class App extends Component {

    state = {
        persons: [
            {name: 'Alice', age: 30}
        ],
        otherState: 'some other state value'
    }

    switchNameHandler = () => {
        console.log('Switch Name from App was clicked!');
        // DO NOT DO THIS this.state.persons[0].age = 44;
        this.setState({
            persons: [
                {name: 'Alice-baba', age: 50}
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I am a react app.</h1>
                <Person1/>
                <Person2/>
                <Person3 name="Anna" age="23"/>
                <Person4 name="Bob" age="33">My hobby is: racing</Person4>
                <Person3 name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <button onClick={this.switchNameHandler}>Switch Name</button>
            </div>
        );
    }
}

export default App;
