import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { App } from './app';
import AddAuthorForm from './componets/addAuthorForm';

let _newAuthor;
function handlerOnNewAuthorSubmitted(newAuthor) {
    _newAuthor = newAuthor;
};

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact={true} path="/" component={() => (<App newAuthor={_newAuthor}/>)} />
            <Route path="/addAuthor" 
                   component={() => (<AddAuthorForm onNewAuthorSubmitted={handlerOnNewAuthorSubmitted}/>)} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);