import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateMdlState } from '../../actions/modelActions';

class ModelLink extends PureComponent {
  static propTypes = {
    mdlName: PropTypes.string.isRequired,
    dbName: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    mdlSchema: PropTypes.string.isRequired,
    onClickMdl: PropTypes.func.isRequired
  }

  render() {
    const { dbName, mdlName, _id, mdlSchema, onClickMdl } = this.props;
    return (
      <>
      <Link to={`${dbName}/${mdlName}`} onClick={() => onClickMdl(mdlName, _id, mdlSchema)}>
        <li>
          <h3>{mdlName}</h3>
        </li>
      </Link>
      <Link to="/create/data" onClick={() => onClickMdl(mdlName, _id, mdlSchema)}>
        <button>Add Data</button>
      </Link>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onClickMdl(mdlName, mdlId, mdlSchema) {
    dispatch(updateMdlState(mdlName, mdlId, mdlSchema));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(ModelLink);
