import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Wishinput = ({ defaultValue, onNewWish }) => {
  const [newWishText, setNewWishText] = useState(defaultValue);
  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish:</legend>
      <input
        className="wish-input__field"
        type="text"
        placeholder="Enter you new Wish"
        value={newWishText}
        onChange={(e) => setNewWishText(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter' && newWishText.length) {
            onNewWish({ done: false, name: newWishText });
            setNewWishText('');
          }
        }}
      />
    </fieldset>
  );
};

Wishinput.propTypes = {
  defaultValue: PropTypes.string,
  onNewWish: PropTypes.func
};

Wishinput.defaultProps = {
  defaultValue: '',
  onNewWish: () => {}
};

export default Wishinput;
