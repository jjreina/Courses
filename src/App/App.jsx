import React, { useState } from 'react';
import './App.css';
import Wishinput from './Wishinput';
import WishList from './WishList';
import Title from './Title';
import ArchiveButton from './ArchiveButton';

const initialWishes = [
  { name: 'Travel to the moon', done: true },
  { name: 'Make an intro course to React', done: true },
  { name: 'Pay the gym', done: true },
  { name: 'Go to the gym', done: false }
];

const TEXT_TITLE = 'My wishlist with modern React';
const TEXT_BUTTON = 'Archive done';

const App = () => {
  const [wishes, setWishes] = useState(initialWishes);
  return (
    <div className="app">
      <Title text={TEXT_TITLE} />
      <Wishinput onNewWish={(wish) => setWishes([wish, ...wishes])} />
      <WishList wishes={wishes} onWishesChange={(wishes) => setWishes(wishes)} />
      <ArchiveButton
        text={TEXT_BUTTON}
        onArchiveClicked={() => setWishes(wishes.filter((wish) => !wish.done))}
      />
    </div>
  );
};

export default App;
