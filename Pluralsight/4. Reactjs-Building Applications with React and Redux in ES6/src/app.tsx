import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/common/header';
import { Routes } from './routes';

export const App: React.StatelessComponent = () => {
    return(
        <BrowserRouter>
            <div className="container-fluid">
                <Header />
                <Routes />
            </div>
        </BrowserRouter>
    );
};
