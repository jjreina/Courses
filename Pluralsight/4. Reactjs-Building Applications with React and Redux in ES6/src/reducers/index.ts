import { combineReducers } from 'redux';
import { authorReducer } from './authorReducers';
import { courseReducer } from './courseReducers';

export const rootReducer = combineReducers({
    authorReducer,
    courseReducer,
});
