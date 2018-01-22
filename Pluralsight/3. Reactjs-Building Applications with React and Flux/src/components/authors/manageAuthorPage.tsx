import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as Toastr from 'toastr';

import { AuthorApi } from '../../api/authorApi';
import { AuthorEntity } from '../../model';
import { AuthorForm } from './authorForm';

interface State {
    author: AuthorEntity;
    errors: any;
}

export class ManageAuthorPage extends React.Component<RouteComponentProps<any>, State> {

    constructor(props) {
        super(props);
        this.state = {
            author: { id: '', firstName: '', lastName: ''},
            errors: {},
        };
    }

    public render() {
        return (
            <AuthorForm
                author={this.state.author}
                onChange={this.setAuthorSatate}
                onSave={this.saveAuthor}
                errors={this.state.errors}
            />
        );
    }

    private setAuthorSatate = (event) => {
        const field: string = event.target.name;
        const value: string = event.target.value;
        this.state.author[field] = value;
        this.setState({author: this.state.author});
    }

    private authorFormIsValid = (): boolean => {
        let formIsValid = true;
        this.setState({ errors: {} });

        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = 'First name must be at least 3 characters. ';
            formIsValid = false;
        }

        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = 'Last name must be at least 3 characters. ';
            formIsValid = false;
        }

        this.setState({ errors: this.state.errors });
        return formIsValid;
    }

    private saveAuthor = (event) => {
        event.preventDefault();
        if (!this.authorFormIsValid()) {
            return;
        }
        AuthorApi.saveAuthor(this.state.author);
        Toastr.success('Author saved.');
        this.props.history.push('/authors');
    }
}

