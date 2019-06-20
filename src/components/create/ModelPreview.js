import React from 'react';
import PropTypes from 'prop-types';
import stateToSchema from '../../utils/stateToSchema';

export default function ModelPreview({ mdlName, mdlSchema }) {
  if(Object.keys(mdlSchema).length === 0) return <p>{mdlName}</p>;
  const prettySchema = stateToSchema(mdlSchema);
  return (
        <>
            <p>{mdlName}</p>
            <p>{JSON.stringify(prettySchema)}</p>
        </>
  );
}

ModelPreview.propTypes = {
  mdlSchema: PropTypes.object.isRequired,
  mdlName: PropTypes.string.isRequired
};
