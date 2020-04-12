import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { LoadingDots } from './loadingDots';

interface Props {
    loading: boolean;
}

const Header: React.StatelessComponent<Props> = ({loading}) => {
    const activeStyle = { color: 'orange' };
    return(
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact={true}>Home</NavLink>
            {' | '}
            <NavLink to="/courses" activeStyle={activeStyle}>Courses</NavLink>
            {' | '}
            <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
            {loading && <LoadingDots interval={100} dots={20}/>}
        </nav>
    );
};

export default Header;
