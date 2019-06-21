import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormLabel, ModelFormInput, FormSelectDiv } from '../../styles';

export default class ModelEntryForm extends PureComponent {
  static propTypes = {
    at: PropTypes.number.isRequired,
    handleEntryChange: PropTypes.func.isRequired
  }

  state = {
    fieldName: '',
    dataType: 'String'
  }

  componentDidUpdate() {
    this.props.handleEntryChange(this.state, this.props.at);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <li>
        <FormLabel>
          Field Name:
        </FormLabel>
        <ModelFormInput name="fieldName" onChange={this.handleChange} value={this.state.fieldName} />
        <FormLabel>
          Data Type:
        </FormLabel>
        <FormSelectDiv>
          <select name="dataType" onChange={this.handleChange} value={this.state.dataType}>
            <option value="String">String</option>
            <option value="Number">Number</option>
            <option value="Boolean">Boolean</option>
            <option value="Image">Image</option>
          </select>
        </FormSelectDiv>
      </li>
    );
  }
}
