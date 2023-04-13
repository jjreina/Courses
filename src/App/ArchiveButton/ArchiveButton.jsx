import React from 'react';
import PropTypes from 'prop-types';

const ArchiveButton = (props) => (
  <button className="wish-clear" type="button">
    {props.text}
  </button>
);

ArchiveButton.propTypes = {
  text: PropTypes.string
};

ArchiveButton.defaultProps = {
  text: ''
};

export default ArchiveButton;
