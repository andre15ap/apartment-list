import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import HomePage from '../pages/home/HomePage';
import SignInPage from '../pages/signIn/SignInPage';
import SignUpPage from '../pages/signUp/SignUpPage';
import BlocksPage from '../pages/blocks/BlocksPage';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignInPage} />
      <Route path="/cadastrar" component={SignUpPage} />

      <Route path="/home" component={HomePage} isPrivate />
      <Route path="/blocos" component={BlocksPage} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} isPrivate />
    </Switch>
  );
}

export default Routes;
