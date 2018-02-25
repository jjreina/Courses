import * as React from 'react';
import { Route } from 'react-router-dom';

import { App } from './app';
import AboutPage from './components/about/aboutPage';
import { CoursesPage } from './components/course/coursesPage';
import HomePage from './components/home/homePage';

export const Routes: React.StatelessComponent<{}> = () => {
    return(
        <div>
            <Route exact={true} path="/" component={HomePage}/>
            <Route path="/courses" component={CoursesPage}/>
            <Route path="/about" component={AboutPage}/>
        </div>
    );
};
