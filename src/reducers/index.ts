import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import { authorReducer } from './authorReducer';
import { courseReducer } from './courseReducer';

export const rootReducer = combineReducers({
    ajaxCallsInProgress,
    authorReducer,
    courseReducer,
});
