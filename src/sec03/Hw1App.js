import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class Hw1App extends Component {

    state = {
        username: 'supermax'
    }

    nameChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    render() {
        return (
            <div className="Hw1App">
                <UserInput 
                    changed={this.nameChangeHandler}
                    currentName={this.state.username} />
                <UserOutput userName={this.state.username}/>
                <UserOutput userName={this.state.username}/>
            </div>
        );
    }
}

export default Hw1App