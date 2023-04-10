import React from 'react';
import './App.css';

const wishes = [
  { name: 'Travel to the moon', done: false },
  { name: 'Make an intro course to React', done: true },
  { name: 'Pay the gym', done: true },
  { name: 'Go to the gym', done: false }
];

const App = () => (
  <div className="app">
    <h1>My wishlist with modern React</h1>
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish:</legend>
      <input className="wish-input__field" type="text" placeholder="Enter your wish here" />
    </fieldset>
    <ul className="wish-list">
      {wishes.map(({ name, done }) => (
        <li key={name} className={`wish-list__item ${done ? 'wish-list__item--done' : ''}`}>
          <input type="checkbox" checked={done} />
          <label>{name}</label>
        </li>
      ))}
    </ul>
    <button className="wish-clear" type="button">
      Archive done
    </button>
  </div>
);

export default App;
