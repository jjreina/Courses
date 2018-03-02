import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '../reducers';

export const configureStore = (initialState?) => {
    console.debug('0: Initialize all - Redux flow - Configure Store.');
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmutableStateInvariant()),
    );
};
