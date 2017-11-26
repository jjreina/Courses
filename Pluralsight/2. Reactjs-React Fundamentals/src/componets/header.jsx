import * as React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ tittle, subtittle } = props) => {
    return (
        <div className='jumbotron text-center'>
            <div className='container'>
                <h1>{tittle}</h1>
                <p>{subtittle}</p>
            </div>
        </div>
    );
}

Header.propTypes = {
    tittle: PropTypes.string.isRequired,
    subtittle: PropTypes.string
};