import React, { PureComponent } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import rejectDuplicates from '../../utils/rejectDuplicates';
import monitorInputs from '../../utils/monitorInputs';
import { Form, FormLabel, FormInput, FormSubmitButton, FormContainer, DBCheckboxDiv, DBCheckboxInput, PinkFontSpan } from '../../styles';

export default class DbForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    userDbs: PropTypes.array.isRequired,
  }

  state = {
    dbName: '',
    publicAccess: true,
    confirmed: false
  }

  handleSubmit = event => {
    event.preventDefault();
    if(rejectDuplicates(this.props.userDbs, this.state.dbName) && monitorInputs(this.state.dbName)) {
      this.props.onSubmit(this.state);
      this.setState({
        dbName: '',
        publicAccess: true,
        confirmed: true
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
    if(this.state.confirmed) return <Redirect to="/create/model" />;
    return (
      <FormContainer>
        <Form onSubmit={this.handleSubmit}>
          <FormLabel htmlFor="dbName">
          Database Name
          </FormLabel>
          <FormInput name="dbName" onChange={this.handleChange} value={this.state.dbName} />
          <DBCheckboxDiv>
            <FormLabel htmlFor="publicAccess">
          Public?
            </FormLabel>
            <DBCheckboxInput name="publicAccess" type="checkbox" onChange={this.handleChange} checked={this.state.publicAccess} />   
            <PinkFontSpan>{this.state.publicAccess ? 'Your endpoints are PUBLIC' : 'Your endpoints are PRIVATE'}</PinkFontSpan>
          </DBCheckboxDiv>
          <Link to="/dashboard"><PinkFontSpan>cancel</PinkFontSpan></Link>
          <FormSubmitButton>Confirm and Create Model</FormSubmitButton>
        </Form>
      </FormContainer>
    );
  }
}
