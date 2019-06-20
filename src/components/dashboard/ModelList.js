import React from 'react';
import PropTypes from 'prop-types';
import ModelLink from './ModelLink';

export default function ModelList({ models, dbName, onClickMdl }) {
  const modelList = models.map(({ _id, mdlName, mdlSchema }) => {
    return <ModelLink key={_id} mdlName={mdlName} dbName={dbName} _id={_id} mdlSchema={mdlSchema} onClickMdl={onClickMdl} />;
  });

  return (
    <ul>
      {modelList}
    </ul>
  );
}

ModelList.propTypes = {
  dbName: PropTypes.string.isRequired,
  models: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    mdlName: PropTypes.string.isRequired
  })),
  onClickMdl: PropTypes.func.isRequired
};
