import * as React from 'react';
import PropTypes from 'prop-types';

export class Info extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showName: false
        }
    }

    handleClick = (event) => {
        this.setState({
            showName: !this.state.showName
        });
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            showName: this.props.showName    
        });
    }

    render() {
        const { authorName } = this.props;
        const { showName } = this.state;
        return (
            <div className='row'>
                <div className='col-md-1 text-center'>
                    <div onClick={this.handleClick} className='fa fa-info-circle fa-2x info'></div>
                </div>
                <div className={`col-md-10 ${showName ? 'answer info' : ''}`}>
                    <div>
                        {showName ? authorName : ''}
                    </div>
                </div>
            </div>
        );
    }
}

Info.propTypes = {
    authorName: PropTypes.string.isRequired,
    showName: PropTypes.bool
};