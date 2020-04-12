import * as React from 'react';
import { Link } from 'react-router-dom';

import { AuthorActions } from '../../actions/authorActions';
import { AuthorEntity } from '../../model';
import AuthorStore from '../../store/authorStore';
import { AuthorList } from './authorList';

interface State {
    authors: AuthorEntity[];
}

export class AuthorPage extends React.Component<{}, State> {

    constructor(props) {
        super(props);
        this.state = { authors: AuthorStore.getAllAuthors() };
    }

    public componentWillMount() {
        AuthorStore.addChageListener(this.onChange.bind(this));
    }

    public componentWillUnmount() {
        AuthorStore.removeChangeListener(this.onChange.bind(this));
    }

    public render() {
        return(
            <div>
                <h1>Authors</h1>
                <Link to="/author" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }

    private onChange() {
        this.setState({ authors: AuthorStore.getAllAuthors() });
    }
}
