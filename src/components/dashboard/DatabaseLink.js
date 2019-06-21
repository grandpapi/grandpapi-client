import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateDbState } from '../../actions/dbActions';
import { DBButton, ViewDBButton } from '../../styles';

class DatabaseLink extends PureComponent {
  static propTypes = {
    dbName: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onClickDb: PropTypes.func.isRequired,
    publicAccess: PropTypes.bool
  }

  render() {
    const { dbName, _id, onClickDb, username } = this.props;
    return (
      <>
        <li>
          {
            !this.props.publicAccess ?
              <div>
                <Link to={`/dashboard/${dbName}`} onClick={() => onClickDb(dbName, _id, username)}>
                  <ViewDBButton><span>{dbName}</span></ViewDBButton>
                </Link>
                <Link to={'create/model'} onClick={() => onClickDb(dbName, _id, username)}>
                  <DBButton>Add Model</DBButton>
                </Link>
              </div>
              :
              <Link to={`/apis/${dbName}`} onClick={() => onClickDb(dbName, _id, username)}>
                <ViewDBButton><span>{dbName}</span></ViewDBButton>
              </Link>
          }
        </li>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onClickDb(dbName, dbId, username) {
    dispatch(updateDbState(dbName, dbId, username));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(DatabaseLink);
