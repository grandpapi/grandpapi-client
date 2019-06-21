import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DatabaseList from '../../components/dashboard/DatabaseList';
import { selectUserDbs } from '../../selectors/dbSelectors';
import { fetchDbs } from '../../actions/userDatabases/dbActions';


class DatabaseDisplay extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    databases: PropTypes.array.isRequired,
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { databases } = this.props;
    return <DatabaseList databases={databases} publicAccess={true} />;
  }
}

const mapStateToProps = state => ({
  databases: selectUserDbs(state),
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchDbs());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatabaseDisplay);
