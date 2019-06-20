import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import FormFieldList from './FormFieldList';
import PropTypes from 'prop-types';
import { selectCurrentModelSchema, selectCurrentModel, selectCurrentDatabase, selectNickname } from '../../selectors/sessionSelectors';
import { createData } from '../../actions/dataActions';

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
    data: {}
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
    this.setState({ data: { ...this.state.data, [target.name]: target.value } });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { username, currentDatabase: { dbName }, currentModel: { mdlName } } = this.props;
    this.props.onSubmit(username, dbName, mdlName, this.state.data);
  }

  render() {
    const { fields } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormFieldList fields={fields} handleChange={this.handleChange} />
        <button>Submit Data</button>
      </form>
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
