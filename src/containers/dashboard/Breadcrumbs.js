import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectSession } from '../../selectors/sessionSelectors';

class Breadcrumbs extends PureComponent {
// $$$currentDatabase
// dbName(pin): "firstDb"
// dbId(pin): "5d0bd87d8b9a5e06a90b1da0"

  // SSScurrentModel
  // mdlName(pin): "newmodel"
  // mdlId(pin): "5d0bd88e8b9a5e06a90b1da1"
  // mdlSchema(pin): "{"happy":"Boolean","yes":"String"}"

  // userId(pin): "auth0|5d0bd54fc7b8da0e1f5fbe86"
  // nickname(pin): "cooldude"
  static propTypes = {
    session: PropTypes.shape({
      currentDatabase: PropTypes.shape({
        dbName: PropTypes.string,
        dbId: PropTypes.string
      }),
      currentModel: PropTypes.shape({
        mdlName: PropTypes.string,
        mdlId: PropTypes.string,
        mdlSchema: PropTypes.string
      })
    })
  }

  render() {
    const { dbName } = this.props.session.currentDatabase;
    const { mdlName } = this.props.session.currentModel;
    return (
      <section>
        <Link to="/dashboard">
        Dashboard
        </Link>
        {dbName && (
        <>
        <span>{' > '}</span>
        <Link to={`/dashboard/${dbName}`}>
          {`${dbName}`}
        </Link>
        </>
        )}
        {mdlName && (
        <>
        <span>{' > '}</span>
        <Link to={`/dashboard/${dbName}/${mdlName}`}>
          {`${mdlName}`}
        </Link>
        </>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  session: selectSession(state)
});

export default connect(
  mapStateToProps
)(Breadcrumbs);
