import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FormFieldList from './FormFieldList';
import PropTypes from 'prop-types';
import { selectCurrentModelSchema, selectCurrentModel, selectCurrentDatabase, selectNickname } from '../../selectors/sessionSelectors';
import { createData } from '../../actions/dataActions';
import styled from 'styled-components';
import { Form, FormContainer, DBButton } from '../../styles';
import { navigateDatabase } from '../../actions/sessionActions';

class DataEntryForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    databaseClick: PropTypes.func.isRequired,
    mdlSchema: PropTypes.string.isRequired,
    currentModel: PropTypes.object.isRequired,
    currentDatabase: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired
  }

  state = {
    fields: [],
    data: {},
    confirmed: false,
    dataSubmitted: false
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.confirmed !== this.state.confirmed) this.setState({ confirmed: false });
    if(prevProps !== this.props) this.setMdlSchema();
  }

  componentDidMount() {
    this.setMdlSchema();
  }

  setMdlSchema = () => {
    const fields = Object.entries(JSON.parse(this.props.mdlSchema));
    this.setState({ fields });
  }

  handleChange = ({ target }) => {
    this.setState({ data: { ...this.state.data, [target.name]: target.value }, dataSubmitted: false });
  }

  handleImage = ({ target }) => {
    const reader = new FileReader();
    reader.onload = event => {
      this.setState({ data: { ...this.state.data, [target.name]: event.target.result } });
    };
    reader.readAsDataURL(target.files[0]);
  }

  handleSubmit = event => {
    event.preventDefault();
    const { username, currentDatabase: { dbName }, currentModel: { mdlName } } = this.props;
    this.props.onSubmit(username, dbName, mdlName, this.state.data);
    this.setState({ data: {}, confirmed: true, dataSubmitted: true });
  }

  render() {
    const { fields } = this.state;
    const { databaseClick, currentDatabase: { dbName } } = this.props;
    const H3 = styled.h3`
    animation: fade 1000ms ease-out forwards;
      @keyframes fade {
        from {
          opacity: 1
        }
        to {
          opacity: 0
        }
      }
    `;
    return (
      <>
        <Link to={`/dashboard/${dbName}`} onClick={() => databaseClick()}><DBButton>Back to Database</DBButton></Link>
        {this.state.dataSubmitted && <H3>Data Added!</H3>}
        <FormContainer>
          <Form onSubmit={this.handleSubmit}>
            <FormFieldList fields={fields} handleChange={this.handleChange} handleImage={this.handleImage} data={this.state.data} confirmed={this.state.confirmed} />
            <DBButton>Submit Data</DBButton>
          </Form>
        </FormContainer>
      </>
    );
  }
}

const mapStateToProps = state => ({
  mdlSchema: selectCurrentModelSchema(state),
  currentModel: selectCurrentModel(state),
  currentDatabase: selectCurrentDatabase(state),
  username: selectNickname(state)
});

const mapDispatchToProps = dispatch => ({
  onSubmit(username, database, model, data) {
    dispatch(createData(username, database, model, data));
  },
  databaseClick() {
    dispatch(navigateDatabase());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataEntryForm);
