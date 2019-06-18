import React from 'react';
import PropTypes from 'prop-types';
import ModelLink from './ModelLink';

export default function ModelLink({ models }) {
  const modelList = models.map(({ _id, mdlName }) => {
    <ModelLink key={_id} mdlName={mdlName}/>
  })
  return (
    <ul>
      {modelList}
    </ul>
  );
}

ModelList.propTypes = {
  models: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    mdlName: PropTypes.string.isRequired
  }))
}
