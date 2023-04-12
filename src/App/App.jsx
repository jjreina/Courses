import React from 'react';
import './App.css';
import Wishinput from './Wishinput';
import WishList from './WishList';

const wishes = [
  { name: 'Travel to the moon', done: false },
  { name: 'Make an intro course to React', done: true },
  { name: 'Pay the gym', done: true },
  { name: 'Go to the gym', done: false }
];

const App = () => (
  <div className="app">
    <h1>My wishlist with modern React</h1>
    <Wishinput />
    <WishList wishes={wishes} />
    <button className="wish-clear" type="button">
      Archive done
    </button>
  </div>
);

export default App;
