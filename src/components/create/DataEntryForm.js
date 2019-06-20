import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FormFieldList from './FormFieldList';
import PropTypes from 'prop-types';
import { selectCurrentModelSchema, selectCurrentModel, selectCurrentDatabase, selectNickname } from '../../selectors/sessionSelectors';
import { createData } from '../../actions/dataActions';
import styled from 'styled-components';

class DataEntryForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    mdlSchema: PropTypes.string.isRequired,
    currentModel: PropTypes.object.isRequired,
    currentDatabase: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired
  }

  state = {
    fields: [],
    data: {},
    confirmed: false
  }

  componentDidMount() {
    const fields = Object.entries(JSON.parse(this.props.mdlSchema));
    this.setState({
      fields
    });
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      const fields = Object.entries(JSON.parse(this.props.mdlSchema));
      this.setState({
        fields
      });
    }
  }

  handleChange = ({ target }) => {
    this.setState({ data: { ...this.state.data, [target.name]: target.value }, confirmed: false });
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
    this.setState({ data: {}, confirmed: true });
  }

  render() {
    const { fields } = this.state;
    const { currentDatabase: { dbName } } = this.props;
    const H3 = styled.h3`
    animation: fade 500ms ease-out forwards;
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
        <Link to={`/dashboard/${dbName}`}>Back to Database</Link>
        <form onSubmit={this.handleSubmit}>
          <FormFieldList fields={fields} handleChange={this.handleChange} handleImage={this.handleImage} data={this.state.data}/>
          <button>Submit Data</button>
        </form>
        {this.state.confirmed && <H3>Data Added!</H3>}
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataEntryForm);
