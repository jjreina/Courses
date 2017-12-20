import * as React from 'react';

import { AuthorEntity } from '../../model';

interface Props {
    author: AuthorEntity;
}

export const AuthorRow: React.StatelessComponent<Props> = (props) => {
    return (
        <tr>
            <td><a href={'/#authors/' + props.author.id}>{props.author.id}</a></td>
            <td>{props.author.firstName} {props.author.lastName}</td>
        </tr>
    );
};
