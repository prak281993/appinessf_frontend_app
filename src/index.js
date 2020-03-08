import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducer';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
import { login } from './action';

const rootReducer = combineReducers({
    auth: reducer
})

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

const expirationTime = new Date(localStorage.getItem('expirationTime'));
if (expirationTime < new Date(Date.now())) {
    localStorage.removeItem('user');
}
else {
    const user = JSON.parse(localStorage.getItem('user'));
    store.dispatch(login(user));
}

const app =
    <Provider store={store}>
        <App />
    </Provider>

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
