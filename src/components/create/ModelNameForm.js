import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ModelNameForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    modelName: ''
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Model Name:
          <input name="modelName" onChange={this.handleChange} value={this.state.modelName} />
        </label>
      </form>
    );
  }
}
