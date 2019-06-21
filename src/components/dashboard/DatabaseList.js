import React from 'react';
import PropTypes from 'prop-types';
import DatabaseLink from './DatabaseLink';
import { DatabaseUl, NewDBButton } from '../../styles';
import { Link } from 'react-router-dom';

export default function DatabaseList({ databases, publicAccess }) {
  const databaseList = databases.map(({ _id, dbName }) => (
    <DatabaseLink key={_id} dbName={dbName} _id={_id} publicAccess={publicAccess} />
  ));
  return (
    <DatabaseUl>
      {
        !publicAccess &&
        <li>
          <Link to="/create/database"><NewDBButton><span>+</span></NewDBButton></Link>
        </li>
      }
      {databaseList}
    </DatabaseUl>

  );
}

DatabaseList.propTypes = {
  databases: PropTypes.arrayOf(PropTypes.shape({
    dbName: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  })),
  publicAccess: PropTypes.bool
};
