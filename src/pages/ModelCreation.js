import React from 'react';
import CreateModel from '../containers/create/CreateModel';
import GlobalHeader from '../components/all/GlobalHeader';
import Footer from '../components/all/Footer';
import { BodyContainer, MainContainer } from '../styles';

export default function ModelCreation() {
  return (
    <BodyContainer>
      <MainContainer>
        <GlobalHeader />
        <CreateModel />
      </MainContainer>
      <Footer />
    </BodyContainer>
  );
}
