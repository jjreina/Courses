import React from 'react';
import PropTypes from 'prop-types';

const WishList = ({ wishes }) => (
  <ul className="wish-list">
    {wishes.map(({ name, done }) => (
      <li key={name} className={`wish-list__item ${done ? 'wish-list__item--done' : ''}`}>
        <input type="checkbox" checked={done} />
        <label>{name}</label>
      </li>
    ))}
  </ul>
);

WishList.propTypes = {
  wishes: PropTypes.arrayOf(
    PropTypes.shape({
      done: PropTypes.bool,
      name: PropTypes.string
    })
  )
};

WishList.defaultProps = {
  wishes: []
};

export default WishList;
