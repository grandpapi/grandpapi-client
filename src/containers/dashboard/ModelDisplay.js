import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ModelList from '../../components/dashboard/ModelList';
import { selectDbId } from '../../selectors/dbSelectors';
import { connect } from 'react-redux';
import { fetchModels } from '../../actions/modelActions';

class ModelDisplay extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    models: PropTypes.array.isRequired,
    dbId: PropTypes. string.isRequired
  }

  render() {
    console.log(this.props.models);
    return (
      <ModelList models={this.props.models}/>
    );
  }
}

const mapStateToProps = state => ({
  dbId: selectDbId(state)

});

const mapDispatchToProps = dispatch => ({
  fetch(dbId) {
    dispatch(fetchModels(dbId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModelDisplay);
