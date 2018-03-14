import { AuthorEntity } from '../model/author';

export const authorsFormattedForDropdown = (authors: AuthorEntity[]) => {
    return authors.map( (author) => {
        return {
            text: author.firstName + ' ' + author.lastName,
            value: author.id,
        };
    });
};
