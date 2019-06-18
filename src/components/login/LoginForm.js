import React, { PureComponent } from 'react';
import { signup, login } from '../../services/auth';

export default class LoginForm extends PureComponent {
  state = {
    signup: {
      email: '',
      username: '',
      password: ''
    },
    login: {
      email: '',
      password: ''
    }
  }

  handleSignupChange = ({ target }) => this.setState({ signup: { ...this.state.signup, [target.name]: target.value } })

  handleSignupSubmit = event => {
    event.preventDefault();
    signup(this.state.signup);
  }
  handleLoginChange = ({ target }) => this.setState({ login: { ...this.state.login, [target.name]: target.value } })
  
  handleLoginSubmit = event => {
    event.preventDefault();
    login(this.state.login);
  }
  
  render() {
    return (
      <>
        <fieldset>
          <legend>Sign Up</legend>
          <form onSubmit={this.handleSignupSubmit}>
            <label>
              Email:
              <input name="email" type="email" onChange={this.handleSignupChange} value={this.state.signup.email} />
            </label>
            <label>
              Username:
              <input name="username" onChange={this.handleSignupChange} value={this.state.signup.username} />
            </label>
            <label>
              Password:
              <input name="password" type="password" onChange={this.handleSignupChange} value={this.state.signup.password} />
            </label>
            <button>Sign Up!</button>
          </form>
        </fieldset>
        <fieldset>
          <legend>
            Log In
          </legend>
          <form onSubmit={this.handleLoginSubmit}>
            <label>
              Email:
              <input name="email" type="email" onChange={this.handleLoginChange} value={this.state.login.email} />
            </label>
            <label>
              Password:
              <input name="password" type="password" onChange={this.handleLoginChange} value={this.state.login.password} />
            </label>
            <button>Log In!</button>
          </form>
        </fieldset>
      </>
    );
  }
}
