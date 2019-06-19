import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ModelEntryForm from '../../components/create/ModelEntryForm';
import { createModel, addEntry } from '../../actions/modelActions';
import { selectMdlId, selectMdlSchema, selectMdlName, selectDbMdls } from '../../selectors/modelSelectors';
// import ModelPreview from '../../components/create/ModelPreview';
import { selectCurrentDatabase, selectCurrentModel } from '../../selectors/sessionSelectors';
import rejectDuplicates from '../../utils/rejectDuplicates';

class CreateModel extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    currentDatabase: PropTypes.shape({
      dbName: PropTypes.string.isRequired,
      dbId: PropTypes.string.isRequired
    }).isRequired,
    currentModel: PropTypes.shape({
      mdlName: PropTypes.string.isRequired,
      mdlId: PropTypes.string.isRequired
    }),
    mdlSchema: PropTypes.string.isRequired,
    dbMdls: PropTypes.array.isRequired
  }

  state = {
    entryCounter: 1,
    mdlName: '',
    mdlSchema: {},
    confirmed: false
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  handleEntryChange = (entry, at) => {
    this.setState({
      mdlSchema: {
        ...this.state.mdlSchema,
        [at]: { [entry.fieldName]: entry.dataType }
      }
    });
  }

  addEntry = () => {
    this.setState({
      entryCounter: this.state.entryCounter + 1
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if(rejectDuplicates(this.props.dbMdls, this.state.mdlName)) {
      this.props.onSubmit(this.state);
      this.setState({
        entryCounter: 1,
        mdlName: '',
        mdlSchema: {},
        confirmed: true
      });
    }
  }

  render() {
    const { mdlSchema, currentModel, currentDatabase } = this.props;
    if(this.state.confirmed) return <Redirect to={`/dashboard/${currentDatabase.dbName}`} />;
    // const modelPreviewProps = { mdlSchema, currentModel };
    const modelEntries = [...Array(this.state.entryCounter)]
      .map((_, i) => <ModelEntryForm
        key={i}
        at={i}
        handleEntryChange={this.handleEntryChange}
      />);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Model Name:
          <input name="mdlName" onChange={this.handleChange} value={this.state.mdlName} />
        </label>
        <ul>
          {modelEntries}
        </ul>
        <button type="button" onClick={this.addEntry}>Add Entry</button>
        {/* <ModelPreview {...modelPreviewProps} /> */}
        <button>Finish Model</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  currentDatabase: selectCurrentDatabase(state),
  currentModel: selectCurrentModel(state),
  mdlId: selectMdlId(state),
  mdlSchema: selectMdlSchema(state),
  mdlName: selectMdlName(state),
  dbMdls: selectDbMdls(state),

});

const mapDispatchToProps = dispatch => ({
  onSubmit(model) {
    dispatch(createModel(model));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateModel);
