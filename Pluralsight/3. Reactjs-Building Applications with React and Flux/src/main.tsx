import * as React from 'react';
import * as ReactDom from 'react-dom';

import { App } from './app';

function render() {
    const route = window.location.hash.substr(1);
    ReactDom.render(
        <App route={route}/>,
        document.getElementById('root'),
    );
}

window.addEventListener('hashchange', render);
render();
