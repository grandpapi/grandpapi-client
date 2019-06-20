import React from 'react';
import LoginForm from '../components/login/LoginForm';
import GlobalHeader from '../components/all/GlobalHeader';
import Footer from '../components/all/Footer';
import { BodyContainer, MainContainer } from '../styles';

export default function Login() {
  return (
    <BodyContainer>
      <MainContainer>
        <GlobalHeader />
        <LoginForm />
      </MainContainer>
      <Footer />
    </BodyContainer>
  );
}
