import * as  React from 'react';
import { Route, Switch } from 'react-router-dom';

import { App } from './app';
import { About, AuthorPage, Home, NotFoundPage } from './components';

export const Routes: React.StatelessComponent<{}> = () => {
    return(
        <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/authors" component={AuthorPage} />
            <Route path="/about" component={About} />
            <Route component={NotFoundPage} />
        </Switch>
    );
};
