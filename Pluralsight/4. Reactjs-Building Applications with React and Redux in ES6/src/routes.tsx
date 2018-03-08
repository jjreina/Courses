import * as React from 'react';
import { Route } from 'react-router-dom';

import { App } from './app';
import AboutPage from './components/about/aboutPage';
import CoursesPage from './components/course/coursesPage';
import ManageCoursePage from './components/course/manageCoursePage';
import HomePage from './components/home/homePage';

export const Routes: React.StatelessComponent<{}> = () => {
    return(
        <div>
            <Route exact={true} path="/" component={HomePage}/>
            <Route path="/courses" component={CoursesPage}/>
            <Route exact={true} path="/course" component={ManageCoursePage}/>
            <Route path="/course/:id" component={ManageCoursePage}/>
            <Route path="/about" component={AboutPage}/>
        </div>
    );
};
