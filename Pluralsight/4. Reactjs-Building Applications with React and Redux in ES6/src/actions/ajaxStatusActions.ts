import {actionsEnum } from './actionsEnums';

export const beginAjaxCall = () => {
    return {
        type: actionsEnum.BEGIN_AJAX_CALL,
    };
};

export const ajaxCallError = () => {
    return {
        type: actionsEnum.AJAX_CALL_ERROR,
    };
};
