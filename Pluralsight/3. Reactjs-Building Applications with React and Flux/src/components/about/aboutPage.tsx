import * as React from 'react';
import { Prompt } from 'react-router-dom';

export const About: React.StatelessComponent<{}> = () => {
    return (
            <div>
            <Prompt message="Are you sure you want to leave About page?" />
            <h1>About</h1>
            <p>
                This application uses the following technologies:
            </p>
            <ul>
                <li>React</li>
                <li>React Router</li>
                <li>Flux</li>
                <li>Node</li>
                <li>Webpack</li>
                <li>Typescript</li>
                <li>Bootstrap</li>
                <li>Babel</li>
            </ul>
        </div>
    );
};
