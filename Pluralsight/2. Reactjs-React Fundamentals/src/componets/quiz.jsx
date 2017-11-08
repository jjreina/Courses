import * as React from 'react';
import _ from 'lodash';

import { Books } from './books';
import { mockData } from '../model/entities';

export class Quiz extends React.Component {

    startGame = () => {
        let books = _.shuffle(mockData.reduce((a, b) => a.concat(b.books), [])).slice(0, 4);
        let answer = books[_.random(books.length - 1)];
        let author = _.find(mockData, (author) => {
            return author.books.some((tittle) => {
                return tittle === answer;
            });
        });
    
        return {
            books: books,
            author: author
        };
    };

    constructor(props) {
        super(props);

        this.state = _.assignIn({
            bgClass: 'neutral',
            showContinue: false
        }, this.startGame());
    }

    handleBooksSelected = (title) => { 
        let isCorrect = this.state.author.books.some((t) => {
            console.log(title === t);
            return title === t;
        });

        this.setState({
            bgClass: isCorrect ? 'pass' : 'fail',
            showContinue: isCorrect
        });
    };

    handleContinue = () => {
        this.setState(
            _.assignIn({
                bgClass: 'neutral',
                showContinue: false
            }, this.startGame())
        );
    };
    
    render() {
        const { author, books, bgClass, showContinue } = this.state;
        return (
            <div>
                <div className='row'>
                    <div className='col-md-2'>
                        <img className='authorimage col-md-3' src={author.imageUrl} alt='author' />
                    </div>
                    <div className='col-md-9'>
                        {books.map( (book, index) => 
                            <Books key={index} tittle={book} onBookSelected={this.handleBooksSelected} /> )}
                    </div>
                    <div className='col-md-1 text-center'>
                        <i className={`fa fa-times-circle-o fa-5x ${bgClass}`}></i>
                    </div>
                </div>
                {
                    showContinue ? 
                        <div className="row">
                            <div className="col-md-12">
                                <input onClick={this.handleContinue} type="button" className="btn btn-primary btn-lg pull-right" value="Continue" />
                            </div>                        
                        </div> : <span/>
                }
            </div>
        );
    }
}