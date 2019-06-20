import React from 'react';
import PropTypes from 'prop-types';
import DatabaseLink from './DatabaseLink';
import { DatabaseUl } from '../../styles';

export default function DatabaseList({ databases }) {
  const databaseList = databases.map(({ _id, dbName }) => (
    <DatabaseLink key={_id} dbName={dbName} _id={_id} />
  ));
  return (
    <DatabaseUl>
      {databaseList}
    </DatabaseUl>
  );
}

DatabaseList.propTypes = {
  databases: PropTypes.arrayOf(PropTypes.shape({
    dbName: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  })),
};
