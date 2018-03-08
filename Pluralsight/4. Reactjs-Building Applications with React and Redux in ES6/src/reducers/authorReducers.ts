import { actionsEnum } from '../actions/actionsEnums';
import { AuthorEntity } from '../model/author';
import initialState from './initialState';

export const authorReducer = (state: AuthorEntity[] = initialState.authors, action) => {
    switch (action.type) {
        case actionsEnum.LOAD_AUTHORS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
