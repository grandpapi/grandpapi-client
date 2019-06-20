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
import DatabaseCreation from '../pages/DatabaseCreation';
import ModelCreation from '../pages/ModelCreation';
import DataCreation from '../pages/DataCreation';
import Docs from '../pages/Docs';
import AboutApp from '../pages/AboutApp';
import PublicApis from '../pages/PublicApis';
import Login from '../pages/Login';
import DatabaseDetail from '../pages/DatabaseDetail';
import ModelDetail from '../pages/ModelDetail';
import { withoutSession } from '../containers/auth/withoutSession';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={withoutSession(Login)} />
        <Route path="/callback" component={Callback} />
        <Route exact path="/about" component={AboutApp} />
        <Route exact path="/docs" component={Docs} />
        <Route exact path="/apis" component={PublicApis} />
        <Route path="/dashboard/:dbName/:mdlName" component={withSession(ModelDetail)}/>
        <Route path="/dashboard/:dbName" component={withSession(DatabaseDetail)}/>
        <Route exact path="/dashboard" component={withSession(Dashboard)} />
        <Route exact path="/create/database" component={withSession(DatabaseCreation)} />
        <Route exact path="/create/model" component={withSession(ModelCreation)} />
        <Route exact path="/create/data" component={withSession(DataCreation)} />
      </Switch>
    </Router>
  );
}
