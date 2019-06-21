import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { selectNickname } from '../selectors/sessionSelectors';
import { connect } from 'react-redux';
import DatabaseDisplay from '../containers/dashboard/DatabaseDisplay';
import GlobalHeader from '../components/all/GlobalHeader';
import Footer from '../components/all/Footer';
import { BodyContainer, MainContainer } from '../styles';
import Breadcrumbs from '../containers/dashboard/Breadcrumbs';

class Dashboard extends PureComponent {
  static propTypes = {
    nickname: PropTypes.string.isRequired,
  }

  render() {
    const { nickname } = this.props;
    return (
      <BodyContainer>
        <GlobalHeader />
        <Breadcrumbs />
        <MainContainer>
          <h2>Welcome to your dashboard, {nickname}!</h2>
          <p>Click the + button to start a new Database. Click on an existing Database to view its Models, or click Add Model to add a new Model to a Database.</p>
          <DatabaseDisplay />
        </MainContainer>
        <Footer />
      </BodyContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  nickname: selectNickname(state)
});

export default connect(
  mapStateToProps
)(Dashboard); 
