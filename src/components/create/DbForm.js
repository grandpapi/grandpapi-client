import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import rejectDuplicateDbs from '../../utils/rejectDuplicates';

export default class DbForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    userDbs: PropTypes.array.isRequired
  }

  state = {
    dbName: '',
    publicAccess: true
  }

  handleSubmit = event => {
    event.preventDefault();
    if(rejectDuplicateDbs(this.props.userDbs, this.state.dbName)) {
      this.props.onSubmit(this.state);
      this.setState({
        dbName: '',
        publicAccess: true
      });
    }
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
          <input name="publicAccess" type="checkbox" onChange={this.handleChange} checked={this.state.publicAccess} />
        </label>
        {/* consider changing state to update text */}
        <p>{this.state.publicAccess ? 'Your endpoints are PUBLIC' : 'Your endpoints are PRIVATE'}</p>
        <Link to="/dashboard">cancel</Link>
        <button>Confirm and Create Model</button>
      </form>
    );
  }
}
