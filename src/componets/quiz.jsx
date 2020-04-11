import * as React from 'react';
import _ from 'lodash';
import { withRouter } from "react-router-dom";

import { Books } from './books';
import { mockData } from '../model/entities';
import { Info } from './info'

// https://www.buscabiografias.com/img/people/Dolores-Redondo.jpg;

class Quiz extends React.Component {

    startGame = () => {

        let newAuthor = {};
        if (this.props.newAuthor !== undefined) {
            newAuthor['name'] = this.props.newAuthor.name;
            newAuthor['imageUrl'] = this.props.newAuthor.imageUrl;
            newAuthor['imageSource'] = 'Wikimedia Commons';
            newAuthor['books'] = [this.props.newAuthor.book1, this.props.newAuthor.book2, this.props.newAuthor.book3];
            if (!_.some(mockData, newAuthor)) {
                mockData.push(newAuthor);
            }
        }

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
            showContinue: false,
            showName: false
        }, this.startGame());
    }

    handleBooksSelected = (title) => { 
        let isCorrect = this.state.author.books.some((t) => {
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
                showContinue: false,
                showName: false
            }, this.startGame())
        );
    };

    handleAddAuthor = () => {
        this.props.history.push('/addAuthor');
    };
    
    render() {
        const { author, books, bgClass, showContinue, showName } = this.state;
        const { history } = this.props;
        
        return (
            <div>
                <div className='row'>
                    <div className='col-md-4'>
                        <img className='authorimage' src={author.imageUrl} alt='author' />
                    </div>
                    <div className='col-md-7'>
                        {books.map( (book, index) => 
                            <Books key={index} tittle={book} onBookSelected={this.handleBooksSelected} /> )}
                        <Info showName={showName} authorName={author.name} />
                    </div>
                    <div className='col-md-1 text-center'>
                        <i className={`fa fa-times-circle-o fa-5x ${bgClass}`}></i>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-md-offset-5">
                        <input onClick={this.handleAddAuthor} id="AddAuthorButton" type="button" className="btn btn-lg" value="Add Author" />
                        <input onClick={this.handleContinue} type="button" className="btn btn-primary btn-lg continueButton" 
                                disabled={this.state.showContinue ? "" : "disabled" } value="Continue" />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Quiz);