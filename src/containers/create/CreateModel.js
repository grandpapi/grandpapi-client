import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ModelNameForm from '../../components/create/ModelNameForm';
import ModelEntryForm from '../../components/create/ModelEntryForm';
import { createModel, addEntry } from '../../actions/modelActions';
import { selectMdlId, selectMdlSchema, selectMdlName, selectDbMdls } from '../../selectors/modelSelectors';
import ModelPreview from '../../components/create/ModelPreview';
import { selectCurrentDatabase, selectCurrentModel } from '../../selectors/sessionSelectors';

class CreateModel extends PureComponent {
  static propTypes = {
    onNameSubmit: PropTypes.func.isRequired,
    onEntrySubmit: PropTypes.func.isRequired,
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
    entryCounter: 1
  }

  handleNameSubmit = state => {
    state.dbId = this.props.currentDatabase.dbId;
    this.props.onNameSubmit(state);
  }

  handleEntrySubmit = state => {
    state.mdlId = this.props.currentModel.mdlId;
    this.setState({ entryCounter: this.state.entryCounter + 1 });
    // this.props.onEntrySubmit(state);
  }

  render() {
    const { mdlSchema, currentModel, dbMdls } = this.props;
    const modelPreviewProps = { mdlSchema, currentModel };
    const modelEntries = [...Array(this.state.entryCounter)].map((_, i) => <ModelEntryForm key={i} onSubmit={this.handleEntrySubmit} />);
    return (
      <>
        <ModelNameForm onSubmit={this.handleNameSubmit} dbMdls={dbMdls} />
        {modelEntries}
        <ModelPreview {...modelPreviewProps} />
      </>
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
  onNameSubmit(model) {
    dispatch(createModel(model));
  },
  onEntrySubmit(model) {
    dispatch(addEntry(model));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateModel);
