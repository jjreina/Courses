import * as React from 'react';

import { Header } from './componet/header';
import { Footer } from './componet/footer';
import { Quiz } from './componet/quiz';
import { data } from './model/entities';

export class App extends React.Component {

  selectGame() {
    let books = _.shuffle(data.reduce((a, b) => a.concat(b.books), [])).slice(0, 4);
    let answer = books[_.random(books.length - 1)];
    let author = _.find(data, (author) => {
        return author.books.some((tittle) => {
            return tittle === answer;
        });
    });
    
    return {
        books: books,
        author: author
    };
  }

	render() {
  	return (
    	<div>
        <Header />
        <Quiz startGame={this.selectGame()}/>
        <Footer />
      </div>
    );
  }
}