import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import ModelNameForm from '../../components/create/ModelNameForm';
import ModelEntryForm from '../../components/create/ModelEntryForm';

class CreateModel extends PureComponent {
    static propTypes = {}

    state = {}

    handleNameSubmit = state => {
      console.log(state.modelName);
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

export default connect(
//   mapStateToProps,
//   mapDispatchToProps
)(CreateModel);
