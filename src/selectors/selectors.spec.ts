import { AuthorEntity } from '../model/author';
import { authorsFormattedForDropdown } from './selectors';

describe('Author Selectors', () => {
    describe('authorsFormattedForDropdown', () => {
        it('should return author data formatted for use in a dropdown', () => {
            const authors: AuthorEntity[] = [
                { id: 'cory-house', firstName: 'Cory', lastName: 'House'},
                { id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'},
            ];

            const expected = [
                { text: 'Cory House', value: 'cory-house' },
                { text: 'Scott Allen', value: 'scott-allen' },
            ];

            expect(authorsFormattedForDropdown(authors)).to.eql(expected);
        });
    });
});
