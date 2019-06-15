import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class NewDbForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired
  }

  state = {
    dbName: '',
    publicBool: true
  }

  handleSubmit = event => {
    event.preventDefault();
    const { nickname, userId } = this.props;
    this.props.onSubmit({ ...this.state, ownerUsername: nickname, ownerId: userId });
    this.setState({
      dbName: '',
      publicBool: true
    });
  }

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [target.name]: value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Database Name
          <input name="dbName" onChange={this.handleChange} value={this.state.dbName} />
        </label>
        <label>
          public?
          <input name="publicBool" type="checkbox" onChange={this.handleChange} checked={this.state.publicBool} />
        </label>
        {/* consider changing state to update text */}
        <p>{this.state.publicBool ? 'Your endpoints are PUBLIC' : 'Your endpoints are PRIVATE'}</p>
        <Link to="/dashboard">cancel</Link>
        <button>Confirm and Create Model</button>
      </form>
    );
  }
}
