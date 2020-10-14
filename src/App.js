import React, { useState } from 'react';

import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Login from './screens/login/login';
import Home from './screens/home/home';
import './App.css';

import PrivateRoute from './utils/privateRoute';
import PublicRoute from './utils/publicRoute';
import { getToken, removeUserSession, setUserSession } from './utils/common';

function App () {

  const [authLoading, setAuthLoading] = useState( true );

  return (
    <BrowserRouter>
      <div>
        {window.location.pathname.includes( 'index.html' ) && <Redirect to="/" />}
      </div>
      <Switch>

        <Route exact path="/" component={Login} />
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
