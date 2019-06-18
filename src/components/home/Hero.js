import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section>
      <h1>Make an app with MegaNap.</h1>
      <p>Easily enter your data, then receive endpoints.</p>
      <Link to="/login">Start Building</Link>
    </section>
  );
}
