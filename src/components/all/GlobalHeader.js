import React from 'react';
import Nav from './Nav';
import { login } from '../../services/auth';

export default function GlobalHeader() {
  return (
    <header>
      <img src='test.png' />
      <Nav/>
      <button onClick={login}>Sign Up / Log In</button>
    </header>
  );
}

