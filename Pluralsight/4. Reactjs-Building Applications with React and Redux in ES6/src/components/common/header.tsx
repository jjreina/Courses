import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { LoadingDots } from './loadingDots';

export const Header: React.StatelessComponent = () => {
    const activeStyle = { color: 'orange' };
    return(
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact={true}>Home</NavLink>
            {' | '}
            <NavLink to="/courses" activeStyle={activeStyle}>Courses</NavLink>
            {' | '}
            <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
            <LoadingDots interval={100} dots={20}/>
        </nav>
    );
};
