import * as React from 'react';
import { BrowserRouter  } from 'react-router-dom';

import { Header } from './components';
import { Routes } from './routes';

export const App: React.StatelessComponent<{}> = () => {
    return (
        <BrowserRouter >
            <div>
                <Header />
                <div className="container-fluid">
                    <Routes />
                </div>
            </div>
        </BrowserRouter >
    );
};
