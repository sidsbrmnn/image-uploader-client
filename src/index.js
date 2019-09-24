import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.slim';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/js/bootstrap';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
