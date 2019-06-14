import React from 'react';
import { login } from '../../services/auth';

export default function SplashHeader() {
  return (
    <header>
      <img src='test.png' />
      <button onClick={login}>Sign Up / Log In</button>
    </header>
  );
}

