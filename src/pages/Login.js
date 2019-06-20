import React from 'react';
import LoginForm from '../components/login/LoginForm';
import GlobalHeader from '../components/all/GlobalHeader';
import Footer from '../components/all/Footer';

export default function Login() {
  return (
    <>
      <GlobalHeader />
      <LoginForm />
      <Footer />
    </>
  );
}
