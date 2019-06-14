import React from 'react';
import { login } from '../../../services/auth';

export default function InstructStartBuilding() {
  return (
    <section>
      <h2>Use your endpoints</h2>
      <p>The final step is to use your endpoints in your frontend app!</p>
      <button onClick={login}>Start Building!</button>
    </section>
  );
}
