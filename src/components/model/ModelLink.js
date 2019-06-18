import React from 'react';
import PropTypes from 'prop-types';

export default function ModelLink({ mdlName }) {
  return (
    <li>
      <h3>{mdlName}</h3>
    </li>
  );
}

ModelLink.propTypes = {
  mdlName: PropTypes.string.isRequired
}
