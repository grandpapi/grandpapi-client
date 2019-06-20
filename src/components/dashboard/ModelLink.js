import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ModelLink({ mdlName, dbName, _id, mdlSchema, onClickMdl }) {
  return (
    <Link to={`${dbName}/${mdlName}`} onClick={() => onClickMdl(mdlName, _id, mdlSchema)}>
      <li>
        <h3>{mdlName}</h3>
      </li>
    </Link>
  );
}

ModelLink.propTypes = {
  mdlName: PropTypes.string.isRequired,
  dbName: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  mdlSchema: PropTypes.string.isRequired,
  onClickMdl: PropTypes.func.isRequired
};
