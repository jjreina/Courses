import * as React from 'react';

import { Header } from './componets/header';
import { Footer } from './componets/footer';
import { Quiz } from './componets/quiz';

export class App extends React.Component {
 
	render() {
  	return (
    	<div>
        <Header />
        <Quiz />
        <Footer />
      </div>
    );
  }
}