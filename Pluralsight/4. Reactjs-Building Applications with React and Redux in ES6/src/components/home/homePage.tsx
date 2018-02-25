import * as React from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    public render() {
        return(
            <div className="jumbotron">
                <h1>Pluralsight Administrations</h1>
                <p>React, Redux and React router in ES6 for ultra-responsive web app.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}
