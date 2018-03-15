import reduxThunk from 'redux-thunk';

import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '../reducers';

export const configureStore = (initialState?) => {
    console.debug('0: Initialize all - Redux flow - Configure Store.');
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxThunk),
    );
};
