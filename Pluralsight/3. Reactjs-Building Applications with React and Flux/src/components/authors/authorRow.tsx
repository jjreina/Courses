import * as React from 'react';
import { Link } from 'react-router-dom';

import { AuthorEntity } from '../../model';

interface Props {
    author: AuthorEntity;
}

export const AuthorRow: React.StatelessComponent<Props> = (props) => {
    return (
        <tr>
            <td><Link to={`author/${props.author.id}`}>{props.author.id}</Link></td>
            <td>{props.author.firstName} {props.author.lastName}</td>
        </tr>
    );
};
