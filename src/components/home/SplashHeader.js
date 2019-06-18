import React from 'react';
import { Link } from 'react-router-dom';

export default function SplashHeader() {
  return (
    <header>
      <img src="assets/logo-small.jpg" />
      <Link to="/login">Log In | Sign Up</Link>
    </header>
  );
}
