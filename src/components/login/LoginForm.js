import React, { PureComponent } from 'react';
import { signup, login } from '../../services/auth';
import { 
  FormHeading,  
  Form, 
  FormLabel, 
  FormInput, 
  FormSubmitButton, 
  FormContainer 
} from '../../styles';
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
        <FormContainer>
          <Form onSubmit={this.handleSignupSubmit}>
            <FormHeading>Sign up</FormHeading>
            
            <FormLabel htmlFor="email">
              Email :
            </FormLabel>
            <FormInput name="email" type="email" onChange={this.handleSignupChange} value={this.state.signup.email} placeholder="ex: email@yourmemail.com"/>
            
            <FormLabel htmlFor="username">
              Username :
            </FormLabel>
            <FormInput name="username" onChange={this.handleSignupChange} value={this.state.signup.username} placeholder="ex: CoolUser84"/>
            
            <FormLabel htmlFor="password">
              Password :
            </FormLabel>
            <FormInput name="password" type="password" onChange={this.handleSignupChange} value={this.state.signup.password} placeholder="password"/>
            <FormSubmitButton>Sign Up !</FormSubmitButton>
          </Form>
        </FormContainer>
        <FormContainer>
          <Form onSubmit={this.handleLoginSubmit}>
            <FormHeading>Log In</FormHeading>
            <FormLabel htmlFor="email">
              Email :
            </FormLabel>
            <FormInput name="email" type="email" onChange={this.handleLoginChange} value={this.state.login.email} />
            
            <FormLabel htmlFor="password">
              Password :
            </FormLabel>
            <FormInput name="password" type="password" onChange={this.handleLoginChange} value={this.state.login.password} />
            
            <FormSubmitButton>Log In !</FormSubmitButton>
          </Form>
        </FormContainer>
        <Footer/>
              </>
    );
  }
}
