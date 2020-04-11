import * as React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { Header } from './header';

class AddAuthorForm extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            formFilled: false
        }
    };
    
    handleSubmit = () => { 
        let data = {};
        Object.keys(this.refs).map(e => {
            data[e] = this.refs[e].value;
        });
        this.props.onNewAuthorSubmitted(data);
        this.props.history.push('/');
        return false;
    };

    handleChange = (event) => {
        
        let someImputEmpty = Object.values(this.refs)
            .some((element) => { return (element.value === "" ) });
        
        this.setState({
            formFilled: !someImputEmpty
        });
    };

    fillFormWithMock = () => {
        this.refs['name'].value = 'Dan Brown';
        this.refs['imageUrl'].value = 'http://www.tantolibro.com/wp-content/uploads/2016/08/Dan-Brown.jpg';
        this.refs['book1'].value = 'La fortaleza digital';
        this.refs['book2'].value = 'Ángeles y demonios';
        this.refs['book3'].value = 'El código Da Vinci';
        this.setState({
            formFilled: true
        });
    }

    render() {
        const { onNewAuthorSubmitted } = this.props;
        const { formFilled } = this.state;

        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <Header tittle='Add New Author' />
                    <form className="center-block" role="form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input ref="name" type="text" className="form-control" placeholder="Name" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <input ref="imageUrl" type="text" className="form-control" placeholder="Image Url" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <input ref="book1" type="text" className="form-control" placeholder="Book 1" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <input ref="book2" type="text" className="form-control" placeholder="Book 2" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <input ref="book3" type="text" className="form-control" placeholder="Book 3" onChange={this.handleChange}/>
                        </div>
                        <button disabled={formFilled ? "" : "disabled"} type="submit" className="btn btn-default">Submit</button>
                        &nbsp;
                        <button type="button" className="btn btn-default" onClick={this.fillFormWithMock}>Fill form with mock</button>
                    </form>
                </div>
            </div>
        );
    }
}

AddAuthorForm.propTypes = {
    onNewAuthorSubmitted: PropTypes.func.isRequired
};

export default withRouter(AddAuthorForm);