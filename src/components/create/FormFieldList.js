import React from 'react';
import PropTypes from 'prop-types';

export default function FormFieldList({ fields, handleChange, handleImage }) {
  const fieldList = fields.map(field => {
    const [key, value] = field;
    switch(value) {
      case 'String':
        return (
          <label key={key + value}>{key}
            <input type="text" name={key} onChange={handleChange} />
          </label>
        );
      case 'Image':
        return (
          <label key={key + value}>
            {key}
            <input type="file" accept="image/.png,image/.jpeg,image/.svg+xml" name={key} onChange={handleImage} />
          </label>
        );
      case 'Number':
        return (
          <label key={key + value}>
            {key}
            <input type="number" name={key} onChange={handleChange} />
          </label>
        );
      case 'Boolean':
        return (
          <div key={key + value}>
            <label >
              {key} True:
              <input name={key} type="radio" value={true} onChange={handleChange} />
            </label>
            <label>
              {key} False:
              <input name={key} type="radio" value={false} onChange={handleChange} />
            </label>
          </div>
        );
      case 'Array':
        return (
          <label key={key + value}>
            {key}
            <input type="text" name={key} />
          </label>
        );
      default:
        return value;
    }
  });

  return (
    <>
      {fieldList}
    </>
  );
}

FormFieldList.propTypes = {
  fields: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleImage: PropTypes.func.isRequired
};
