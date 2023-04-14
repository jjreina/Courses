import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const WishItem = ({ name, done, onDoneChange }) => {
  const [age, setAge] = useState(0);
  useEffect(() => {
    let ageInterval;
    if (done) {
      setAge(0);
    } else {
      ageInterval = setInterval(() => {
        if (done) {
          clearInterval(ageInterval);
        } else {
          setAge((age) => age + 1);
        }
      }, 1000);
    }
    return () => clearInterval(ageInterval);
  }, [done]);
  return (
    <li
      key={name}
      className={`
      wish-list__item ${done ? 'wish-list__item--done' : ''} 
      wish-list__item ${age >= 3 ? 'wish-list__item--warning' : ''}
      wish-list__item ${age >= 6 ? 'wish-list__item--danger' : ''}
    `}>
      <input type="checkbox" checked={done} onChange={(e) => onDoneChange(e.target.checked)} />
      <label>{name}</label>
    </li>
  );
};

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
