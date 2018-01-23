import * as React from 'react';
import { Prompt, Redirect, RouteComponentProps } from 'react-router-dom';
import * as Toastr from 'toastr';

import { AuthorApi } from '../../api/authorApi';
import { AuthorEntity } from '../../model';
import { AuthorForm } from './authorForm';

interface State {
    author: AuthorEntity;
    errors: any;
    dirty: boolean;
    redirect: boolean;
}

export class ManageAuthorPage extends React.Component<RouteComponentProps<any>, State> {

    constructor(props) {
        super(props);
        this.state = {
            author: { id: '', firstName: '', lastName: ''},
            errors: {},
            dirty: false,
            redirect: false,
        };
    }

    public render() {
        const { author, dirty } = this.state;
        if (this.state.redirect) {
            return(
                <Redirect to="/authors" />
            );
        } else {
            return (
                <div>
                    <Prompt
                        when={dirty}
                        message="Leave without saving?"
                    />
                    <AuthorForm
                        author={author}
                        onChange={this.setAuthorSatate}
                        onSave={this.saveAuthor}
                        errors={this.state.errors}
                    />
                </div>
            );
        }
    }

    private setAuthorSatate = (event) => {
        const field: string = event.target.name;
        const value: string = event.target.value;
        this.state.author[field] = value;
        this.setState({
            author: this.state.author,
            dirty: true,
        });
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
        this.setState({ dirty: false, redirect: true });
        Toastr.success('Author saved.');
    }
}

