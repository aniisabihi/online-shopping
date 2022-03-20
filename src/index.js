import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import CartReducer from './components/reducers/CartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(CartReducer);
const mainPage = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    mainPage
);
