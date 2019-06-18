import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ModelNameForm from '../../components/create/ModelNameForm';
import ModelEntryForm from '../../components/create/ModelEntryForm';
import { createModel, addEntry, fetchModels } from '../../actions/modelActions';
import { selectDbId } from '../../selectors/dbSelectors';
import { selectMdlId, selectMdlSchema, selectMdlName, selectUserMdlNames } from '../../selectors/modelSelectors';
import ModelPreview from '../../components/create/ModelPreview';
import { selectUserId } from '../../selectors/sessionSelectors';

class CreateModel extends PureComponent {
  static propTypes = {
    onNameSubmit: PropTypes.func.isRequired,
    onEntrySubmit: PropTypes.func.isRequired,
    dbId: PropTypes.string.isRequired,
    mdlId: PropTypes.string.isRequired,
    mdlSchema: PropTypes.string.isRequired,
    mdlName: PropTypes.string.isRequired,
    userMdls: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired
  }

  handleNameSubmit = state => {
    state.dbId = this.props.dbId;
    this.props.onNameSubmit(state);
  }

  handleEntrySubmit = state => {
    state.mdlId = this.props.mdlId;
    this.props.onEntrySubmit(state);
  }

  componentDidMount() {
    this.props.fetch(this.props.userId);
  }


  render() {
    const { mdlSchema, mdlName, userMdls } = this.props;
    const modelPreviewProps = { mdlSchema, mdlName };
    console.log(userMdls);
    return (
      <>
        <ModelNameForm onSubmit={this.handleNameSubmit} />
        <ModelEntryForm mdlSchema={mdlSchema || []} onSubmit={this.handleEntrySubmit} />
        <ModelPreview {...modelPreviewProps} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  userId: selectUserId(state),
  dbId: selectDbId(state),
  mdlId: selectMdlId(state),
  mdlSchema: selectMdlSchema(state),
  mdlName: selectMdlName(state),
  userMdls: selectUserMdlNames(state)
});

const mapDispatchToProps = dispatch => ({
  onNameSubmit(model) {
    dispatch(createModel(model));
  },
  onEntrySubmit(model) {
    dispatch(addEntry(model));
  },
  fetch(userId) {
    dispatch(fetchModels(userId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateModel);
