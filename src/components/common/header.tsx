import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={require('../../images/pluralsight-logo.png')} alt=""/>
                    </Link>
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/authors">Authors</Link></li>
                    </ul>
            </div>
        </nav>
    );
};
