import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_INPUT_TEXT = ''

const Wishinput = ({ defaultValue, onNewWish }) =>{
const [newWishText, setNewWishText] = useState(defaultValue);
  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish:</legend>
      <input className="wish-input__field" 
        type="text" 
        placeholder={newWishText} 
        onChange={e => setNewWishText(e.target.value)}
        onKeyUp={e => {
          if (e.key === 'Enter' && newWishText.length) {
            onNewWish({done: false, name: newWishText})
            console.log('****************' + newWishText)
            setNewWishText(defaultValue);
            console.log('****************' + newWishText)
          }
        }} />
    </fieldset>
  );
}

Wishinput.defaultProps = {
  defaultValue: '',
  onNewWish: () => {},
};

export default Wishinput;
