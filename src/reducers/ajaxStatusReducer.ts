import { actionsEnum } from '../actions/actionsEnums';
import initialState from './initialState';

const actionTypeEndsSuccess = (type: string) => {
    return type.substring(type.length - 8) === '_SUCCESS';
};

const ajaxStatusReducer = (state: number = initialState.ajaxCallsInProgress, action) => {
    if (action.type === actionsEnum.BEGIN_AJAX_CALL) {
        return state + 1;
    } else if (action.type === actionsEnum.AJAX_CALL_ERROR ||
            actionTypeEndsSuccess(action.type)) {
        return state - 1;
    }
    return state;
};

export default ajaxStatusReducer;
