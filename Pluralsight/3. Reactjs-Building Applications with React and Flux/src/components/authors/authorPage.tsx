import * as React from 'react';

import { AuthorApi } from '../../api';
import { AuthorEntity } from '../../model';
import { AuthorRow } from './authorRow';

interface State {
    authors: AuthorEntity[];
}

export class Authors extends React.Component<{}, State> {

    constructor(props) {
        super(props);
        this.state = { authors: [] };
    }

    public componentWillMount() {
        this.setState({ authors: AuthorApi.getAllAuthors() });
    }

    public render() {
        return(
            <div>
                <h1>Authors</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.authors.map( (author) => <AuthorRow key={author.id} author={author}/> )}
                    </tbody>
                </table>
            </div>
        );
    }
}

