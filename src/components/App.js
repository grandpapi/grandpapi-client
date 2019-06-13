import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Callback from '../containers/auth/Callback';
// import { withSession } from '../containers/auth/withSession';
import Home from '../components/Home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/callback" component={Callback} />
      </Switch>
    </Router>
  );
}
  
