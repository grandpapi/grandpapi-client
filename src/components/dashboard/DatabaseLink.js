import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function DatabaseLink({ dbName, _id, onClickDb }) {
  return (
    <Link to={`/dashboard/${dbName}`} onClick={() => onClickDb(dbName, _id)}>
      <li>
        <h3>{dbName}</h3>
        {/* <img src={imgSrc} alt={dbName} /> */}
      </li>
    </Link>
  );
}

DatabaseLink.propTypes = {
  dbName: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  onClickDb: PropTypes.func.isRequired,
  // imgSrc: PropTypes.string.isRequired,
};

// dbName: "mydb"
// deployed: false
// publicAccess: true
// userId: "auth0|5d0ae8658055fd0cc73772eb"
// username: "christopher"
// __v: 0
// _id: "5d0ae87c57161611f480db22"
