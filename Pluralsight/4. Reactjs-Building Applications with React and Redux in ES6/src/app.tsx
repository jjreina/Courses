import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/common/header';
import { Routes } from './routes';

interface Props {
    loading: boolean;
}

const App: React.StatelessComponent<Props> = ({loading}) => {
    return(
        <BrowserRouter>
            <div className="container-fluid">
                <Header loading={loading}/>
                <Routes />
            </div>
        </BrowserRouter>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.ajaxCallsInProgress > 0,
    };
};

export default connect(mapStateToProps)(App);
