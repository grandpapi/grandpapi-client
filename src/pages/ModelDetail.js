import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GlobalHeader from '../components/all/GlobalHeader';
import { selectCurrentModel, selectNickname, selectCurrentDatabase } from '../selectors/sessionSelectors';
import { updateMdlState } from '../actions/modelActions';
import { BodyContainer, MainContainer } from '../styles';
import Footer from '../components/all/Footer';

class ModelDetail extends PureComponent {
  static propTypes = {
    currentMdl: PropTypes.object,
    username: PropTypes.string,
    currentDatabase: PropTypes.object,
    onClickMdl: PropTypes.func
  }

  render() {
    const { username, onClickMdl } = this.props;
    const { mdlName, mdlId, mdlSchema } = this.props.currentMdl;
    const { dbName } = this.props.currentDatabase;
    const endpoint = `${process.env.API_URL}/api/${username}/${dbName}/${mdlName}`;

    return (
      <BodyContainer>
        <GlobalHeader />
        <MainContainer>
          <h1>{mdlName}</h1>
          <h3>Model Schema: </h3>
          <p>{mdlSchema}</p>
          <p>{'Endpoint: '}
            <a href={`${endpoint}`} target='_blank' rel='noopener noreferrer'>{endpoint}</a>
          </p>
          <Link to={'create/data'} onClick={() => onClickMdl(mdlName, mdlId, mdlSchema)}>
            <button>Add Data</button>
          </Link>
        </MainContainer>
        <Footer />
      </BodyContainer>
    );
  }
}

const mapStateToProps = state => ({
  currentMdl: selectCurrentModel(state),
  username: selectNickname(state),
  currentDatabase: selectCurrentDatabase(state)
});

const mapDispatchToProps = dispatch => ({
  onClickMdl(mdlName, mdlId, mdlSchema) {
    dispatch(updateMdlState(mdlName, mdlId, mdlSchema));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModelDetail);
