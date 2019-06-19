import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
        <label>
          Field Name:
          <input name="fieldName" onChange={this.handleChange} value={this.state.fieldName} />
        </label>
        <label>
          Data Type:
          <select name="dataType" onChange={this.handleChange} value={this.state.dataType}>
            <option value="String">String</option>
            <option value="Number">Number</option>
            <option value="Boolean">Boolean</option>
            <option value="Array">Array</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </li>
    );
  }
}
