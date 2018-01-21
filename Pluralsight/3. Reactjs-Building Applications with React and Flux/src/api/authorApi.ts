import * as _ from 'lodash';

// This file is mocking a web API by hitting hard coded data.
import { AuthorEntity } from '../model';
import { authors } from './authorData';

// This would be performed on the server in a real app. Just stubbing in.
const generateId = (author: AuthorEntity) => {
    return `${author.firstName.toLowerCase()}-${author.lastName.toLowerCase()}`;
};

// return cloned copy so that the item is passed by value instead of by reference
const clone = (item: any): any => {
    return JSON.parse(JSON.stringify(item));
};

const getAllAuthors = (): AuthorEntity[] => {
    return clone(authors);
};

const getAuthorById = (id: string): AuthorEntity => {
    const author = _.find(authors, { id });
    return clone(author);
};

const saveAuthor = (author: AuthorEntity): AuthorEntity => {
    // pretend an ajax call to web api is made here
    console.log('Pretend this just saved the author to the DB via AJAX call...');
    if (author.id) {
        const existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id}));
        authors.splice(existingAuthorIndex, 1, author);
    } else {
        // Just simulating creation here.
        // The server would generate ids for new authors in a real app.
        // Cloning so copy returned is passed by value rather than by reference.
        author.id = generateId(author);
        authors.push(author);
    }

    return clone(author);
};

const deleteAuthor = (id: string) => {
    console.log('Pretend this just deleted the author from the DB via an AJAX call...');
    _.remove(authors, { id });
};

export const AuthorApi = {
    getAllAuthors,
    getAuthorById,
    saveAuthor,
    deleteAuthor,
};
