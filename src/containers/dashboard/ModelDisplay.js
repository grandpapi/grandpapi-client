import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ModelList from '../../components/dashboard/ModelList';
import { connect } from 'react-redux';
import { fetchModels } from '../../actions/modelActions';
import { selectDbMdls } from '../../selectors/modelSelectors';
import { selectNickname } from '../../selectors/sessionSelectors';
import SingleDbEndpointList from '../../components/dashboard/SingleDbEndpointList';

class ModelDisplay extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    dbMdls: PropTypes.array,
    dbName: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.fetch(this.props.dbName);
  }

  render() {
    const { username, dbName, dbMdls } = this.props;
    return (
      <>
        <ModelList dbName={dbName} models={dbMdls} />
        <SingleDbEndpointList username={username} dbName={dbName} dbMdls={dbMdls} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  dbMdls: selectDbMdls(state),
  username: selectNickname(state)
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
