import { AuthorApi } from '../api/index';
import ActionsTypes from '../constants/actionsType';
import instanceDispacher from '../dispacher/appDispacher';
import { AuthorEntity } from '../model/index';

const creatAuthor = (author: AuthorEntity) => {
    const newAuthor: AuthorEntity = AuthorApi.saveAuthor(author);

    instanceDispacher.dispatch({
        actionType: ActionsTypes.CREATE_AUTHOR,
        author: newAuthor,
    });
};

const updateAuthor = (author: AuthorEntity) => {
    const updatedAuthor: AuthorEntity = AuthorApi.saveAuthor(author);

    instanceDispacher.dispatch({
        actionType: ActionsTypes.UPDATE_AUTHOR,
        author: updatedAuthor,
    });
};

const deleteAuthor = (id: string) => {
    AuthorApi.deleteAuthor(id);

    instanceDispacher.dispatch({
        actionType: ActionsTypes.DELETE_AUTHOR,
        id,
    });
};

export const AuthorActions = {
    creatAuthor,
    updateAuthor,
    deleteAuthor,
};
