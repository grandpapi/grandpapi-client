import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Callback from '../containers/auth/Callback';
import Home from '../pages/Home';
import { withSession } from '../containers/auth/withSession';
import Dashboard from '../pages/Dashboard';
import Create from '../pages/Create';
import Docs from '../pages/Docs';
import AboutApp from '../pages/AboutApp';
import PublicApis from '../pages/PublicApis';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutApp}/>
        <Route exact path="/docs" component={Docs}/>
        <Route exact path="/apis" component={PublicApis}/>
        <Route path="/dashboard" component={withSession(Dashboard)} />
        <Route exact path="/create" component={withSession(Create)}/>
        <Route path="/callback" component={Callback} />
      </Switch>
    </Router>
  );
}
  
