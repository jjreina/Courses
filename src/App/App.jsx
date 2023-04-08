import React from 'react';

const wishes = [
  { name: 'Travel to the monn', done: false },
  { name: 'Pay the gym', done: true },
  { name: 'Go to the gym', done: false }
];

const App = () => (
  <>
    <h1>My wishlist with modern React</h1>
    <fieldset>
      <legend>New wish</legend>
      <input type="text" placeholder="Enter your wish here" />
    </fieldset>
    <ul>
      {wishes.map(({ name, done }) => (
        <li key={name}>
          <input type="checkbox" checked={done} />
          <label>{name}</label>
        </li>
      ))}
    </ul>
    <button type="button">Archive done</button>
  </>
);

export default App;
