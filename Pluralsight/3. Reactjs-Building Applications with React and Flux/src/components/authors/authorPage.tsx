import * as React from 'react';

import { AuthorApi } from '../../api';
import { AuthorEntity } from '../../model';
import { AuthorList } from './authorList';

interface State {
    authors: AuthorEntity[];
}

export class AuthorPage extends React.Component<{}, State> {

    constructor(props) {
        super(props);
        this.state = { authors: [] };
    }

    public componentDidMount() {
        this.setState({ authors: AuthorApi.getAllAuthors() });
    }

    public render() {
        return(
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
}
