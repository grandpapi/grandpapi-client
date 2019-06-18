import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ModelNameForm from '../../components/create/ModelNameForm';
import ModelEntryForm from '../../components/create/ModelEntryForm';
import { createModel, addEntry } from '../../actions/modelActions';
import { selectDbId } from '../../selectors/dbSelectors';
import { selectMdlId, selectMdlSchema, selectMdlName, selectMdlNameShow, selectMdlEntryShow } from '../../selectors/modelSelectors';
import ModelPreview from '../../components/create/ModelPreview';

class CreateModel extends PureComponent {
  static propTypes = {
    onNameSubmit: PropTypes.func.isRequired,
    onEntrySubmit: PropTypes.func.isRequired,
    dbId: PropTypes.string.isRequired,
    mdlId: PropTypes.string.isRequired,
    mdlSchema: PropTypes.string.isRequired,
    mdlName: PropTypes.string.isRequired,
    modelNameShow: PropTypes.bool.isRequired,
    modelEntryShow: PropTypes.bool.isRequired
  }

  state = {
    nameFormShow: false,
    entryFormShow: false
  }

  handleNameSubmit = state => {
    state.dbId = this.props.dbId;
    this.props.onNameSubmit(state);
  }

  handleEntrySubmit = state => {
    state.mdlId = this.props.mdlId;
    this.props.onEntrySubmit(state);
  }


  render() {
    const { mdlSchema, mdlName, modelNameShow, modelEntryShow } = this.props;
    const modelPreviewProps = { mdlSchema, mdlName };
    return (
      <>
        <ModelNameForm modelNameShow={modelNameShow} onSubmit={this.handleNameSubmit} />
        <ModelEntryForm modelEntryShow={modelEntryShow} onSubmit={this.handleEntrySubmit} />
        <ModelPreview {...modelPreviewProps} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  dbId: selectDbId(state),
  mdlId: selectMdlId(state),
  mdlSchema: selectMdlSchema(state),
  mdlName: selectMdlName(state),
  modelNameShow: selectMdlNameShow(state),
  modelEntryShow: selectMdlEntryShow(state)
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
