import React from 'react';
import PropTypes from 'prop-types';
import { BigCurly } from '../../styles';

function SchemaPreview(text) {
  return (
    <>
      <p> <BigCurly>&#123;&nbsp;</BigCurly> {text.text.toString()} <BigCurly>&nbsp;&#125;</BigCurly></p> <br />
    </>
  );
}

SchemaPreview.propTypes = {
  text: PropTypes.string.isRequired
};

export default SchemaPreview;
