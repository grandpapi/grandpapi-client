import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/about">About Mega Nap</Link></li>
        <li><Link to="/docs">Documentation</Link></li>
        <li><Link to="/apis">Example Apps</Link></li>
      </ul>
    </nav>
  );
}
