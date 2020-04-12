import * as  React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { App } from './app';
import { About, AuthorPage, Home, ManageAuthorPage, NotFoundPage } from './components';

export const Routes: React.StatelessComponent<{}> = () => {
    return(
        <Switch>
            <Redirect from="/about/*" to="/about" />
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/author/:id" component={ManageAuthorPage} />
            <Route exact={true} path="/authors" component={AuthorPage} />
            <Route exact={true} path="/author" component={ManageAuthorPage} />
            <Route exact={true} path="/about" component={About} />
            <Route component={NotFoundPage} />
        </Switch>
    );
};
