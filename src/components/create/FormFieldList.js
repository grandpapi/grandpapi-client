import React from 'react';
import PropTypes from 'prop-types';

export default function FormFieldList({ fields }) {
  const fieldList = fields.map(field => {
    const key = field[0] + field[1];
    switch(field[1]) {
      case 'String':
        return (
          <label key={key}>{field[0]}
            <input type="text" name={field[0]} />
          </label>
        );
      case 'Image':
        return (
          <label key={key}>{field[0]}<input type="text" name={field[0]} /></label>
        );
      case 'Number':
        return (
          <label key={key}>{field[0]}<input type="number" name={field[0]} /></label>
        );
      case 'Boolean':
        return (
                    <>
                        <label key={key}>
                          {field[0]} True:
                          <input type="radio" value="true" />
                        </label>
                        <label>
                          {field[0]} False:
                          <input type="radio" value="false" />
                        </label>
                    </>
        );
      case 'Array':
        return (
          <label key={key}>{field[0]}<input type="text" name={field[0]} /></label>
        );
      default:
        return field[1];
    }
  });

  return (
    <form>
      {fieldList}
      <button>Submit Data</button>
    </form>
  );
}

FormFieldList.propTypes = {
  fields: PropTypes.array.isRequired
};
