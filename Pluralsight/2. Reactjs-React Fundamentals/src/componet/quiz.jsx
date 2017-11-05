import * as React from 'react';
import _ from 'lodash';

import { Books } from './books';

export const Quiz = (props) => {
    return (
        <div className='row'>
            <div className='col-md-4'>
                <img className='authorimage col-md-3' src={props.startGame.author.imageUrl} alt='author' />
            </div>
            <div className='col-md-7'>
                {props.startGame.books.map( (book, index) => 
                    <Books key={index} tittle={book}/> )}
            </div>
            <div className='col-md-1'>
            </div>
        </div>
    );
}