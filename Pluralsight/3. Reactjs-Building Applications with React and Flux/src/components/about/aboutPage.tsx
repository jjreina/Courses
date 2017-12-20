import * as React from 'react';

export const About: React.StatelessComponent<{}> = () => {
    return (
        <div>
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
