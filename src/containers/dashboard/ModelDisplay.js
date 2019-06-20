import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ModelList from '../../components/dashboard/ModelList';
import { connect } from 'react-redux';
import { fetchModels } from '../../actions/modelActions';
import { selectDbMdls } from '../../selectors/modelSelectors';

class ModelDisplay extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    dbMdls: PropTypes.array,
    dbName: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.fetch(this.props.dbName);
  }

  render() {
    return (
      <>
      <ModelList dbName={this.props.dbName} models={this.props.dbMdls} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  dbMdls: selectDbMdls(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(dbName) {
    dispatch(fetchModels(dbName));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModelDisplay);
