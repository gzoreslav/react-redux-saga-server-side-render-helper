import React from 'react';
import { hydrate } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';


export const configureStore = ({preloadedState, rootReducer, rootSaga}) => {
    if (!preloadedState) {
        preloadedState = window.__PRELOADED_STATE__;
        delete window.__PRELOADED_STATE__;
    }
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(
            rootReducer,
            preloadedState,
            applyMiddleware(sagaMiddleware)
        ),
        runSaga: sagaMiddleware.run(rootSaga)
    };
};