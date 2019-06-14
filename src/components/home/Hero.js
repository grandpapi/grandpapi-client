import React from 'react';
import { login } from '../../services/auth';

export default function Hero() {
  return (
    <section>
      <h1>Make an app with MegaNap.</h1>
      <p>Easily enter your data, then receive endpoints.</p>
      <button onClick={login}>Start Building</button>
    </section>
  );
}

