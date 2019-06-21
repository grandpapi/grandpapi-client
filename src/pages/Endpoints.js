import React from 'react';
import { BodyContainer, MainContainer } from '../styles';
import GlobalHeader from '../components/all/GlobalHeader';
import EndpointDisplay from '../containers/dashboard/EndpointDisplay';
import Breadcrumbs from '../containers/dashboard/Breadcrumbs';

export default function Endpoints() {
  return (
    <BodyContainer>
      <GlobalHeader />
      <Breadcrumbs />
      <MainContainer>
        <EndpointDisplay />
      </MainContainer>
    </BodyContainer>
  );
}
