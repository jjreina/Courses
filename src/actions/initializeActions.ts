import { AuthorApi } from '../api/index';
import ActionsTypes from '../constants/actionsType';
import instanceDispacher from '../dispacher/appDispacher';

const initApp = () => {
    instanceDispacher.dispatch({
        actionType: ActionsTypes.INITIALIZE,
        initalData: AuthorApi.getAllAuthors(),
    });
};

export const InitializeActions = {
    initApp,
};
