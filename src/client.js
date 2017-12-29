import React from 'react';
import { hydrate } from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';


export const doClient = ({App, rootReducer, rootSaga}) => {
    const store = configureStore({rootReducer, rootSaga});
    hydrate(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
};