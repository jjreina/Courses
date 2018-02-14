import PropTypes from 'prop-types';
import * as React from 'react';

import { AuthorEntity } from '../../model/index';
import { AuthorRow } from './authorRow';

interface Props {
    authors: AuthorEntity[];
}

export const AuthorList: React.StatelessComponent<Props> = ({authors}) => {
    return(
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                    {authors.map( (author) => <AuthorRow key={author.id} author={author}/> )}
                </tbody>
            </table>
        </div>
    );
};

AuthorList.propTypes = {
    authors: PropTypes.array.isRequired,
};
