import React from 'react';
import PropTypes from 'prop-types';

const ArchiveButton = (props) => (
  <button className="wish-clear" type="button" onClick={props.onArchiveClicked}>
    {props.text}
  </button>
);

ArchiveButton.propTypes = {
  text: PropTypes.string,
  onArchiveClicked: PropTypes.func
};

ArchiveButton.defaultProps = {
  text: ''
};

export default ArchiveButton;
