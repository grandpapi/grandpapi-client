import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ModelNameForm from '../../components/create/ModelNameForm';
import ModelEntryForm from '../../components/create/ModelEntryForm';
import { createModel } from '../../actions/modelActions';
import { selectDbId } from '../../selectors/dbSelectors';

class CreateModel extends PureComponent {
  static propTypes = {
    onNameSubmit: PropTypes.func.isRequired,
    dbId: PropTypes.string.isRequired
  }

  handleNameSubmit = state => {
    state.dbId = this.props.dbId;
    this.props.onNameSubmit(state);
  }

  handleEntrySubmit = state => {
    console.log(state);
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
  dbId: selectDbId(state)
});

const mapDispatchToProps = dispatch => ({
  onNameSubmit(model) {
    dispatch(createModel(model));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateModel);
