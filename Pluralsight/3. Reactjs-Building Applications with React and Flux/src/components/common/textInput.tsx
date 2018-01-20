import * as React from 'react';

interface Props {
    name: string;
    value: string;
    label: string;
    placeholder?: string;
    error?: string;
    onChange: any;
}

export class Input extends React.Component<Props, {}> {

    constructor(props) {
        super(props);
    }

    public render() {
        return(
            <div className={this.wrapperClass()}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <input
                        type="text"
                        name={this.props.name}
                        className="form-control"
                        placeholder={this.props.placeholder}
                        ref={this.props.value}
                        value={this.props.value}
                        onChange={this.props.onChange}
                    />
                    <div className="imput">{this.props.error}</div>
                </div>
            </div>
        );
    }

    private wrapperClass = (): string => {
        let wrapperClass: string = 'form-group';
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += ' ' + 'has-error';
        }

        return wrapperClass;
    }
}
