import {actionsEnum } from './actionsEnums';

export const beginAjaxCall = () => {
    return {
        type: actionsEnum.BEGIN_AJAX_CALL,
    };
};
