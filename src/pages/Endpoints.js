import React from 'react';
import { BodyContainer, MainContainer } from '../styles';
import GlobalHeader from '../components/all/GlobalHeader';
import EndpointDisplay from '../containers/dashboard/EndpointDisplay';

export default function Endpoints() {
  return (
    <BodyContainer>
      <GlobalHeader />
      <MainContainer>
        <EndpointDisplay />
      </MainContainer>
    </BodyContainer>
  );
}
