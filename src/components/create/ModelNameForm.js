import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ModelNameForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    mdlName: ''
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Model Name:
          <input name="mdlName" onChange={this.handleChange} value={this.state.mdlName} />
        </label>
        <button>Save Model Name</button>
      </form>
    );
  }
}
