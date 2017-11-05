import * as React from 'react';

export const Books = (props) => {
    return (
        <div className='answer' key={props.index}>
            {props.tittle}
        </div>
    );
}
