import React from 'react';
import CreateModel from '../containers/create/CreateModel';
import GlobalHeader from '../components/all/GlobalHeader';
import Footer from '../components/all/Footer';
import { BodyContainer, MainContainer } from '../styles';
import Breadcrumbs from '../containers/dashboard/Breadcrumbs';

export default function ModelCreation() {
  return (
    <BodyContainer>
      <GlobalHeader />
      <Breadcrumbs />
      <MainContainer>
        <CreateModel />
      </MainContainer>
      <Footer />
    </BodyContainer>
  );
}
