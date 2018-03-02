import { combineReducers } from 'redux';
import { courseReducer } from './courseReducers';

export const rootReducer = combineReducers({
    courseReducer,
});
