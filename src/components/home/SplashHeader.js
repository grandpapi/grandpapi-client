import React from 'react';
import { login } from '../../services/auth';

export default function SplashHeader() {
  return (
    <header>
      <img src="assets/logo-small.jpg" />
      <button onClick={login}>Sign Up / Log In</button>
    </header>
  );
}
