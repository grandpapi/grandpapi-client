import React from 'react';
import PropTypes from 'prop-types';
import { FormLabel, FormInput, FormInputNumber, FormInputRadio, DBCheckboxDiv } from '../../styles';

export default function FormFieldList({ fields, handleChange, handleImage, data, confirmed }) {
  const fieldList = fields.map(field => {
    const [key, value] = field;
    switch(value) {
      case 'String':
        return (
          <>
          <FormLabel key={key + value}>{key}
            <FormInput type="text" name={key} onChange={handleChange} value={data[key] || ''} />
          </FormLabel>
          </>
        );
      case 'Image':
        return (
          <>
            <FormLabel key={key + value + (!confirmed && key)}>{key}
              <FormInput type="file" accept="image/.png,image/.jpeg,image/.svg+xml" name={key} onChange={handleImage} />
            </FormLabel>
          </>
        );
      case 'Number':
        return (
          <>
          <FormLabel key={key + value}>{key}
            <FormInputNumber type="number" name={key} onChange={handleChange} value={data[key] || ''}/>
          </FormLabel>
          </>
        );
      case 'Boolean':
        return (
          <DBCheckboxDiv key={key + value}>
            <FormLabel>
              {key} True:
              <FormInputRadio name={key} type="radio" value={true} onChange={handleChange} />
            </FormLabel>
            <FormLabel>
              {key} False:
              <FormInputRadio name={key} type="radio" value={false} onChange={handleChange} />
            </FormLabel>
          </DBCheckboxDiv>
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
  handleImage: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  confirmed: PropTypes.bool.isRequired
};
