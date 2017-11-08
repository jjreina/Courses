import * as React from 'react';

export const Books = (props) => {

    const handleClick = (event) => props.onBookSelected(props.tittle);

    return (
        <div onClick={handleClick} className='answer' key={props.index}>
            {props.tittle}
        </div>
    );
}
