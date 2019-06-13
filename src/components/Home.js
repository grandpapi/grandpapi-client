import React from 'react';
import { login } from '../services/auth';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <button onClick={login}>Log In / Sign Up</button>
    </>
  );
}
