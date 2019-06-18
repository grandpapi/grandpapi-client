import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function DatabaseLink({ dbName, imgSrc }) {
  return (
    <Link to={`/dashboard/${dbName}`}>
      <li>
        <h3>{dbName}</h3>
        <img src={imgSrc} alt={dbName} />
      </li>
    </Link>
  );
}

DatabaseLink.propTypes = {
  dbName: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
