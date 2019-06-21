import React from 'react';
import PropTypes from 'prop-types';
import ModelLink from './ModelLink';
import { DatabaseDetailUl } from '../../styles';

export default function ModelList({ models, dbName }) {
  const modelList = models.map(({ _id, mdlName, mdlSchema }) => {
    return <ModelLink key={_id} mdlName={mdlName} dbName={dbName} _id={_id} mdlSchema={mdlSchema} />;
  });

  return (
    <DatabaseDetailUl>
      {modelList}
    </DatabaseDetailUl>
  );
}

ModelList.propTypes = {
  dbName: PropTypes.string.isRequired,
  models: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    mdlName: PropTypes.string.isRequired
  })),
};
