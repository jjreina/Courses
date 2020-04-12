import * as React from 'react';
import * as ReactDom from 'react-dom';

import { InitializeActions } from './actions/initializeActions';
import { App } from './app';

InitializeActions.initApp();

ReactDom.render(
    <App />,
    document.getElementById('root'),
);
