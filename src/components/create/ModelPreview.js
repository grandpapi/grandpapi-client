import React from 'react';
import PropTypes from 'prop-types';

export default function ModelPreview({ mdlSchema, mdlName }) {
  return (
        <>
            <p>{mdlName}</p>
            <p>{mdlSchema }</p>
        </>
  );
}

ModelPreview.propTypes = {
  mdlSchema: PropTypes.string.isRequired,
  mdlName: PropTypes.string.isRequired
};
