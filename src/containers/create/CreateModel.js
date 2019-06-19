import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ModelNameForm from '../../components/create/ModelNameForm';
import ModelEntryForm from '../../components/create/ModelEntryForm';
import { createModel, addEntry } from '../../actions/modelActions';
import { selectDbId } from '../../selectors/dbSelectors';
import { selectMdlId, selectMdlSchema, selectMdlName, selectDbMdls } from '../../selectors/modelSelectors';
import ModelPreview from '../../components/create/ModelPreview';

class CreateModel extends PureComponent {
  static propTypes = {
    onNameSubmit: PropTypes.func.isRequired,
    onEntrySubmit: PropTypes.func.isRequired,
    dbId: PropTypes.string.isRequired,
    mdlId: PropTypes.string.isRequired,
    mdlSchema: PropTypes.string.isRequired,
    mdlName: PropTypes.string.isRequired,
    dbMdls: PropTypes.array.isRequired
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
    const { mdlSchema, mdlName, dbMdls } = this.props;
    const modelPreviewProps = { mdlSchema, mdlName };
    return (
      <>
        <ModelNameForm onSubmit={this.handleNameSubmit} dbMdls={dbMdls} />
        <ModelEntryForm onSubmit={this.handleEntrySubmit} />
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
  dbMdls: selectDbMdls(state)
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
