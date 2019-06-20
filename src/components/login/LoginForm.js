import React, { PureComponent } from 'react';
import { signup, login } from '../../services/auth';
import { SignUpInSpan, SignUpIn, SignUpInForm, SignUpInLabel, SignUpInInput, SignUpInButton } from './loginstyles';
import GlobalHeader from '../all/GlobalHeader';
import Footer from '../all/Footer';

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
      <GlobalHeader/>
        <SignUpIn>
          <SignUpInForm onSubmit={this.handleSignupSubmit}>
            <SignUpInSpan>Sign up</SignUpInSpan>
            
            <SignUpInLabel htmlFor="email">
              Email :
            </SignUpInLabel>
            <SignUpInInput name="email" type="email" onChange={this.handleSignupChange} value={this.state.signup.email} placeholder="ex: email@yourmemail.com"/>
            
            <SignUpInLabel htmlFor="username">
              Username :
            </SignUpInLabel>
            <SignUpInInput name="username" onChange={this.handleSignupChange} value={this.state.signup.username} placeholder="ex: CoolUser84"/>
            
            <SignUpInLabel htmlFor="password">
              Password :
            </SignUpInLabel>
            <SignUpInInput name="password" type="password" onChange={this.handleSignupChange} value={this.state.signup.password} placeholder="password"/>
            
            <SignUpInButton>Sign Up !</SignUpInButton>
          </SignUpInForm>
        </SignUpIn>
        <SignUpIn>
          <SignUpInForm onSubmit={this.handleLoginSubmit}>
            <SignUpInSpan>Log In</SignUpInSpan>
            <SignUpInLabel htmlFor="email">
              Email :
            </SignUpInLabel>
            <SignUpInInput name="email" type="email" onChange={this.handleLoginChange} value={this.state.login.email} />
            
            <SignUpInLabel htmlFor="password">
              Password :
            </SignUpInLabel>
            <SignUpInInput name="password" type="password" onChange={this.handleLoginChange} value={this.state.login.password} />
            
            <SignUpInButton>Log In !</SignUpInButton>
          </SignUpInForm>
        </SignUpIn>
        <Footer/>
              </>
    );
  }
}
