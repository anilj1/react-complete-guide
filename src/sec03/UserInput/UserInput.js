import React, { Component } from 'react';
import '../App.css';

class UserInput extends Component {

    inputStyle = {
        broder: '2px solid red'
    }

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div>
                <input 
                    type="text" 
                    style={this.inputStyle}
                    onChange={this.props.changed}
                    value={this.props.currentName}/>
            </div>
        );
    }
}

export default UserInput

