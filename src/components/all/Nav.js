import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/about">About App</Link></li>
        <li><Link to="/docs">Documentation</Link></li>
        <li><Link to="/apis">Example APIs</Link></li>
      </ul>
    </nav>
  );
}

