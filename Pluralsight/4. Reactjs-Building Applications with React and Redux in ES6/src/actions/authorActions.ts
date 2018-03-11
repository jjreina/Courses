import authorApi from '../api/mockAuthorApi';

import { actionsEnum } from './actionsEnums';
import { beginAjaxCall } from './ajaxStatusActions';

const loadAuthorsSuccess = (authors) => {
    return {
        payload: authors,
        type: actionsEnum.LOAD_AUTHORS_SUCCESS,
    };
};

export const loadAuthors = () => {
    return (dispatch) => {
        dispatch(beginAjaxCall());
        return authorApi.getAllAuthors().then((authors) => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch((error) => {
            throw(error);
        });
    };
};
