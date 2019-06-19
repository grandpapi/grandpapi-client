import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ModelLink({ mdlName, dbName }) {
  return (
    <Link to={`${dbName}/${mdlName}`}>
      <li>
        <h3>{mdlName}</h3>
      </li>
    </Link>
  );
}

ModelLink.propTypes = {
  mdlName: PropTypes.string.isRequired,
  dbName: PropTypes.string.isRequired
};
