import { EventEmitter } from 'events';
import * as _ from 'lodash';
import ActionsTypes from '../constants/actionsType';
import instanceDispacher from '../dispacher/appDispacher';
import { AuthorEntity } from '../model/index';

const CHANGE_EVENT: string = 'change';

class AuthorStore extends EventEmitter {

    private authors: AuthorEntity[] = [];

    constructor() {
        super();
        instanceDispacher.register(this.dispacherCallback.bind(this));
    }

    public addChageListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    public removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    public getAllAuthors(): AuthorEntity[] {
        return this.authors;
    }

    public getAuthorById(id: string): AuthorEntity {
        return _.find(this.authors, { id });
    }

    private emitChange() {
        this.emit(CHANGE_EVENT);
    }

    private dispacherCallback(action) {
        switch (action.actionType) {
            case ActionsTypes.INITIALIZE:
                this.authors = action.initalData;
                this.emitChange();
                break;
            case ActionsTypes.CREATE_AUTHOR:
                this.authors.push(action.author);
                this.emitChange();
                break;
            case ActionsTypes.UPDATE_AUTHOR:
                const existingAuthor = _.find(this.authors, {id: action.author.id});
                const existingAuthorIndex = _.indexOf(this.authors, existingAuthor);
                this.authors.splice(existingAuthorIndex, 1, action.author);
                this.emitChange();
                break;
            case ActionsTypes.DELETE_AUTHOR:
                _.remove(this.authors, (author) => {
                    return action.id === author.id;
                });
                this.emitChange();
                break;
            default:
                // no op
        }
    }
}

export default new AuthorStore();
