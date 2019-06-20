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
    fields: []
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      const fields = Object.entries(JSON.parse(this.props.mdlSchema));
      this.setState({
        fields
      });
    }
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  handleSubmit = event => {
    event.preventDefault();
    const { username, currentDatabase: { dbName }, currentModel: { mdlName } } = this.props;
    this.props.onSubmit(this.state);
  }

  render() {
    const { fields } = this.state;
    return (
      <>
        <h1>hi</h1>
        <FormFieldList fields={fields} />
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
