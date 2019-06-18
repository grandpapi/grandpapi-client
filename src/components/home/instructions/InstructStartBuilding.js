import React from 'react';
import { Link } from 'react-router-dom';

export default function InstructStartBuilding() {
  return (
    <section>
      <h2>Use your endpoints</h2>
      <p>The final step is to use your endpoints in your frontend app!</p>
      <Link to="/login">Start Building!</Link>
    </section>
  );
}
