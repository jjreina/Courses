import * as React from 'react';

import { AuthorEntity } from '../../model';
import { Input } from '../common/textInput';

interface Props {
    author: AuthorEntity;
    onChange: any;
    onSave: any;
    errors?: any;
}

export class AuthorForm extends React.Component<Props, {}> {
    public render() {
        return (
            <form>
                <h1>Manage Author</h1>
                <Input
                    name="firstName"
                    label="First Name"
                    placeholder="First Name"
                    value={this.props.author.firstName}
                    onChange={this.props.onChange}
                    error={this.props.errors.firstName}
                />
                <Input
                    name="lastName"
                    label="Last Name"
                    placeholder="Last Name"
                    value={this.props.author.lastName}
                    onChange={this.props.onChange}
                    error={this.props.errors.lastName}
                />
                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
            </form>
        );
    }
}
