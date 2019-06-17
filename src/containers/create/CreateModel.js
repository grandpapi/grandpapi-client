import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ModelNameForm from '../../components/create/ModelNameForm';
import ModelEntryForm from '../../components/create/ModelEntryForm';
import { createModel, addEntry } from '../../actions/modelActions';
import { selectDbId } from '../../selectors/dbSelectors';
import { selectMdlId } from '../../selectors/modelSelectors';

class CreateModel extends PureComponent {
  static propTypes = {
    onNameSubmit: PropTypes.func.isRequired,
    onEntrySubmit: PropTypes.func.isRequired,
    dbId: PropTypes.string.isRequired,
    mdlId: PropTypes.string.isRequired
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
    return (
      <>
        <ModelNameForm onSubmit={this.handleNameSubmit} />
        <ModelEntryForm onSubmit={this.handleEntrySubmit} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  dbId: selectDbId(state),
  mdlId: selectMdlId(state)
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
