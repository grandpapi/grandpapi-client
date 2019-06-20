import React from 'react';
import PropTypes from 'prop-types';

function SchemaPreview(text) {
  return (
    <>
      <p>{'{  ' + text.text.toString() + '  }'}</p> <br />
    </>
  );
}

SchemaPreview.propTypes = {
  text: PropTypes.string.isRequired
};

export default SchemaPreview;

