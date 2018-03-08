import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { loadAuthors } from './actions/authorActions';
import { loadCourses } from './actions/courseActions';
import { Header } from './components/common/header';
import { Routes } from './routes';
import { configureStore } from './store/configureStore';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

export const App: React.StatelessComponent = () => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <div className="container-fluid">
                    <Header />
                    <Routes />
                </div>
            </BrowserRouter>
        </Provider>
    );
};
