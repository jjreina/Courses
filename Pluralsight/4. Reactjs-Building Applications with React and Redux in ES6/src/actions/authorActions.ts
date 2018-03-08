import authorApi from '../api/mockAuthorApi';

import { actionsEnum } from '../actions/actionsEnums';

const loadAuthorsSuccess = (authors) => {
    return {
        payload: authors,
        type: actionsEnum.LOAD_AUTHORS_SUCCESS,
    };
};

export const loadAuthors = () => {
    return (dispatch) => {
        return authorApi.getAllAuthors().then((authors) => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch((error) => {
            throw(error);
        });
    };
};
