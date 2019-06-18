import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles.css';


export default class ModelEntryForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    mdlEntryShow: PropTypes.bool.isRequired
  }

  state = {
    fieldName: '',
    dataType: 'String'
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    const showHideClassName = this.props.mdlEntryShow ? 'display-block' : 'display-none';
    return (
      <>
        <form className={styles[showHideClassName]} onSubmit={this.handleSubmit}>
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
          <button>Save Entry</button>
        </form>
        <button>Start New Model</button>
      </>
    );
  }
}
