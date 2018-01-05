import React from 'react';
import ReactDOM from 'react-dom';
import BasicExample from './router-basic';
import './static/css/APP.less'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<BasicExample />, document.getElementById('root'));
registerServiceWorker();
