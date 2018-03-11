import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import { loadAuthors } from './actions/authorActions';
import { loadCourses } from './actions/courseActions';
import App from './app';
import { configureStore } from './store/configureStore';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
