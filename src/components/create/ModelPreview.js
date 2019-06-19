import React from 'react';
import PropTypes from 'prop-types';

export default function ModelPreview({ mdlSchema, currentModel }) {
  const { mdlName } = currentModel;
  return (
        <>
            <p>{mdlName}</p>
            <p>{mdlSchema }</p>
        </>
  );
}

ModelPreview.propTypes = {
  mdlSchema: PropTypes.string.isRequired,
  currentModel: PropTypes.shape({
    mdlName: PropTypes.string.isRequired,
    mdlId: PropTypes.string.isRequired
  }).isRequired
};
