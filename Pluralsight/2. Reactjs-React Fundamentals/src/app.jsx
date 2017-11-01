import * as React from 'react';

import { Header } from './header';
import { Footer } from './footer';
import { Quiz } from './quiz';
import { data } from './model/entities';

const img = './images/williamshakespeare.jpg';

export class App extends React.Component {
	render() {
  	return (
    	<div>
        <Header />
        <Quiz authors={data}/>
        <Footer />
      </div>
    );
  }
}