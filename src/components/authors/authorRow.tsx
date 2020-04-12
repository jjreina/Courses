import * as React from 'react';
import { Link } from 'react-router-dom';
import * as Toastr from 'toastr';

import { AuthorActions } from '../../actions/authorActions';
import { AuthorEntity } from '../../model';

interface Props {
    author: AuthorEntity;
}

export const AuthorRow: React.StatelessComponent<Props> = (props) => {

    const deleteAuthor = (id: string, e) => {
        e.preventDefault();
        AuthorActions.deleteAuthor(id);
        Toastr.success('Author deleted.');
    };

    return (
        <tr>
            <td><Link to={`author/${props.author.id}`}>{props.author.id}</Link></td>
            <td>{props.author.firstName} {props.author.lastName}</td>
            <td><a href="#" onClick={deleteAuthor.bind(this, props.author.id)}>Delete</a></td>
        </tr>
    );
};
