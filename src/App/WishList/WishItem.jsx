import React from 'react';
import PropTypes from 'prop-types';

const WishItem = ({ name, done, onDoneChange }) => (
  <li key={name} className={`wish-list__item ${done ? 'wish-list__item--done' : ''}`}>
    <input type="checkbox" checked={done} onChange={(e) => onDoneChange(e.target.checked)} />
    <label>{name}</label>
  </li>
);

WishItem.propTypes = {
  name: PropTypes.string,
  done: PropTypes.bool,
  onDoneChange: PropTypes.func
};

WishItem.defaultProps = {
  name: '',
  done: false,
  onDoneChange: () => {}
};

export default WishItem;
