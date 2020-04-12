import * as React from 'react';

import { AuthorEntity } from '../../model/author';

interface Props {
    name: string;
    label: string;
    onChange: any;
    defaultOption: string;
    value: string;
    error?: string;
    options: any;
}

export const SelectInput: React.StatelessComponent<Props> =
    ({name, label, value, defaultOption, error, onChange, options}) => {
    return(
        <div className="form-group">
        <label htmlFor={name}>{label}</label>
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="form-control"
            >
                <option value="">{defaultOption}</option>
                {options.map( (option) => <option key={option.value} value={option.value}>{option.text}</option> )}
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};
