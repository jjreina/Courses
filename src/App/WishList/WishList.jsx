import React from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';

const WishList = ({ wishes, onWishesChange }) => (
  <ul className="wish-list">
    {wishes.map(({ name, done }, i) => (
      <WishItem
        key={name}
        name={name}
        done={done}
        onDoneChange={(value) => {
          const updatedWhises = [...wishes];
          updatedWhises[i].done = value;
          onWishesChange(updatedWhises);
        }}
      />
    ))}
  </ul>
);

WishList.propTypes = {
  wishes: PropTypes.arrayOf(
    PropTypes.shape({
      done: PropTypes.bool,
      name: PropTypes.string
    })
  ),
  onWishesChange: PropTypes.func
};

WishList.defaultProps = {
  wishes: [],
  onWishesChange: () => {}
};

export default WishList;
