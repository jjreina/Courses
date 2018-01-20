import * as React from 'react';

import { AuthorEntity } from '../../model';
import { AuthorForm } from './authorForm';

interface State {
    author: AuthorEntity;
}

export class ManageAuthorPage extends React.Component<{}, State> {

    constructor(props) {
        super(props);
        this.state = {
            author: { id: '', firstName: '', lastName: ''},
        };
    }

    public render() {
        return (
            <AuthorForm author={this.state.author} onChange={this.setAuthorSatate}/>
        );
    }

    private setAuthorSatate = (event) => {
        const field: string = event.target.name;
        const value: string = event.target.value;
        this.state.author[field] = value;
        this.setState({author: this.state.author});
    }
}
