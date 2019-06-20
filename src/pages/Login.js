import React from 'react';
import LoginForm from '../components/login/LoginForm';
import LoginHeader from '../components/login/LoginHeader';
import Footer from '../components/all/Footer';
import { BodyContainer, MainContainer } from '../styles';

export default function Login() {
  return (
    <BodyContainer>
      <MainContainer noPadding>
        <LoginHeader />
        <LoginForm />
      </MainContainer>
      <Footer />
    </BodyContainer>
  );
}
