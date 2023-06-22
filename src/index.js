import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './layout/App';
import reducer from './store/reducer';
import config from './config';
import './assets/scss/style.scss';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={config.basename}>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

