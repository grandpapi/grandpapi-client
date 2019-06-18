import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

export default function GlobalHeader() {
  return (
    <header>
      <img src='test.png' />
      <Nav/>
      <Link to="/login">Log In | Sign Up</Link>
    </header>
  );
}
