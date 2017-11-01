import * as React from 'react';

export const Quiz = (props) => {
    return (
        <div className='row'>
            <div className='col-md-4'>
                <img className='authorimage' src={props.authors[0].imageUrl} alt='author' />
            </div>
        </div>
    );
}
