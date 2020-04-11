import * as React from 'react';

import { Header } from './componets/header';
import { Footer } from './componets/footer';
import Quiz from './componets/quiz';

export class App extends React.Component {
	render() {
    const { newAuthor } = this.props;
   	return (
    	<div className="row">
        <div className="col-md-6 col-md-offset-3">
          <Header tittle='Author Quiz' subtittle='Select the book written by the author shown'/>
          <Quiz newAuthor={newAuthor}/>
          <Footer />
        </div>
      </div>
    );
  }
}