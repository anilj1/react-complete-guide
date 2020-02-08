import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Gap from './Gap';
import TextApp from './TextApp';
import Hw1App from './sec03/Hw1App';
import Hw2App from './sec04/Hw2App';
import StyleApp from './sec05/StyleApp';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Gap />, document.getElementById('root'));
// ReactDOM.render(<TextApp />, document.getElementById('root'));
// ReactDOM.render(<Hw1App />, document.getElementById('root'));
// ReactDOM.render(<Hw2App />, document.getElementById('root'));
ReactDOM.render(<StyleApp />, document.getElementById('root'));

registerServiceWorker();
