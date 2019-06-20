import React from 'react';
import PropTypes from 'prop-types';
import DatabaseLink from './DatabaseLink';
import { DatabaseUl, NewDBButton } from '../../styles';
import { Link } from 'react-router-dom';

export default function DatabaseList({ databases }) {
  const databaseList = databases.map(({ _id, dbName, imgSrc }) => (
    <DatabaseLink key={_id} dbName={dbName} imgSrc={imgSrc} _id={_id} />
  ));
  return (
    <DatabaseUl>
      <li>
        <Link to="/create/database"><NewDBButton><span>+</span></NewDBButton></Link>
      </li> 
      {databaseList}
    </DatabaseUl>

  );
}

DatabaseList.propTypes = {
  databases: PropTypes.arrayOf(PropTypes.shape({
    dbName: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  })),
};
