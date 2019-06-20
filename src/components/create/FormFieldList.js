import React from 'react';
import PropTypes from 'prop-types';
import { FormLabel, FormInput, FormInputNumber, FormInputRadio, DBCheckboxDiv } from '../../styles';

export default function FormFieldList({ fields, handleChange, handleImage, data }) {
  console.log(data);
  const fieldList = fields.map(field => {
    const [key, value] = field;
    switch(value) {
      case 'String':
        return (
          <>
          <FormLabel key={key + value}>{key}</FormLabel>
            <FormInput type="text" name={key} onChange={handleChange} value={data[key] || ''} />
          </>
        );
      case 'Image':
        return (
          <>
          <FormLabel key={key + value}>{key} </FormLabel>
            <FormInput type="file" accept="image/.png,image/.jpeg,image/.svg+xml" name={key} onChange={handleImage} value={data[key] || ''}/>
          </>
        );
      case 'Number':
        return (
          <>
          <FormLabel key={key + value}>{key}</FormLabel>
            <FormInputNumber type="number" name={key} onChange={handleChange} value={data[key] || ''}/>
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
  data: PropTypes.object.isRequired
};
