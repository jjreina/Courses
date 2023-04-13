import React from 'react';
import './App.css';
import Wishinput from './Wishinput';
import WishList from './WishList';
import Title from './Title';
import ArchiveButton from './ArchiveButton';

const wishes = [
  { name: 'Travel to the moon', done: false },
  { name: 'Make an intro course to React', done: true },
  { name: 'Pay the gym', done: true },
  { name: 'Go to the gym', done: false }
];

const TEXT_TITLE = 'My wishlist with modern React'
const TEXT_BUTTON = 'Archive done'

const App = () => (
  <div className="app">
    <Title text={TEXT_TITLE}/>
    <Wishinput />
    <WishList wishes={wishes} />
    <ArchiveButton text={TEXT_BUTTON}/>
  </div>
);

export default App;
