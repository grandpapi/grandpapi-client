import React from 'react';
import PropTypes from 'prop-types';
import stateToSchema from '../../utils/stateToSchema';
import schemaToPreview from '../../utils/schemaToPreview';
import SchemaPreview from './SchemaPreview';

export default function ModelPreview({ mdlName, mdlSchema }) {
  if(Object.keys(mdlSchema).length === 0) return <p>{mdlName}</p>;
  const previewSchema = schemaToPreview(stateToSchema(mdlSchema)).map((text, i) =>  <SchemaPreview key={i} text={text} />);

  return (
        <>
            <p>{mdlName}</p>
            {previewSchema}
        </>
  );
}

ModelPreview.propTypes = {
  mdlSchema: PropTypes.object.isRequired,
  mdlName: PropTypes.string.isRequired
};
