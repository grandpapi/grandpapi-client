import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectSession } from '../../selectors/sessionSelectors';
import { navigateDashboard, navigateDatabase } from '../../actions/sessionActions';

class Breadcrumbs extends PureComponent {
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
    }),
    dashboardClick: PropTypes.func.isRequired,
    databaseClick:PropTypes.func.isRequired,
  }

  render() {
    const { dbName } = this.props.session.currentDatabase;
    const { mdlName } = this.props.session.currentModel;
    const { dashboardClick, databaseClick } = this.props;
    return (
      <section>
        <Link to="/dashboard" onClick={() => dashboardClick()}>
        Dashboard
        </Link>
        {dbName && (
        <>
        <span>{' > '}</span>
        <Link to={`/dashboard/${dbName}`} onClick={() => databaseClick()}>
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

const mapDispatchToProps = dispatch => ({
  dashboardClick() {
    dispatch(navigateDashboard());
  },
  databaseClick() {
    dispatch(navigateDatabase());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Breadcrumbs);
