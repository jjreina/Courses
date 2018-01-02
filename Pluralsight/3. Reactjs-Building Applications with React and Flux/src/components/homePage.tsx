import * as React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.StatelessComponent<{}> = () => {
    return (
        <div className="jumbotron">
            <h2>Github: https://github.com/jjreina/Courses.git</h2>
            <p>React, React Router and Flux</p>
            <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
        </div>
    );
};
