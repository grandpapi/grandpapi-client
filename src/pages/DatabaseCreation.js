import React from 'react';
import CreateDb from '../containers/create/CreateDb';
import GlobalHeader from '../components/all/GlobalHeader';
import Footer from '../components/all/Footer';
import { BodyContainer, MainContainer } from '../styles';

export default function DatabaseCreation() {
  return (
    <BodyContainer>
      <GlobalHeader />
      <MainContainer>
        <CreateDb />
      </MainContainer>
      <Footer />
    </BodyContainer>
  );
}
