import React from 'react';
import { Provider } from 'react-redux';
import {configureStore} from './store'
import  ReactDOM  from 'react-dom';
import App from './App.js'

ReactDOM.render(
    <Provider store={configureStore()}>
         <App/>
    </Provider>, 
    document.getElementById('root')
    );