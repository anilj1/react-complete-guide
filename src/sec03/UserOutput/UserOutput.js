import React, { Component } from 'react';
import './UserOutput.css';

class UserOutput extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="UserOutput">
                <p>Some raondom text {this.props.userName}</p>
                <p>Some more randon text</p>
            </div>
        );
    }
}

export default UserOutput

