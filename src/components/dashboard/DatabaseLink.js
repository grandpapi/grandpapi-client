import React from 'react';
import PropTypes from 'prop-types';

export default function DatabaseLink({ dbName, imgSrc }) {
  return (
    <li>
      <h3>{dbName}</h3>
      <img src={imgSrc} alt={dbName} />
    </li>
  );
}

DatabaseLink.propTypes = {
  dbName: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
