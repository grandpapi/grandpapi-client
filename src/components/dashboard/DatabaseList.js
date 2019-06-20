import React from 'react';
import PropTypes from 'prop-types';
import DatabaseLink from './DatabaseLink';
import { DatabaseUl } from './databaseListStyles';

export default function DatabaseList({ databases }) {
  const databaseList = databases.map(({ _id, dbName, imgSrc }) => <DatabaseLink key={_id} dbName={dbName} imgSrc={imgSrc} />);
  return (
    <DatabaseUl>
      {databaseList}
    </DatabaseUl>
  );
}

DatabaseList.propTypes = {
  databases: PropTypes.arrayOf(PropTypes.shape({
    dbName: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  }))
};
