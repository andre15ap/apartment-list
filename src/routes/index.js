import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import HomePage from '../pages/home/HomePage';
import SignInPage from '../pages/signIn/SignInPage';
import SignUpPage from '../pages/signUp/SignUpPage';
import ProfilePage from '../pages/profile/ProfilePage';
import BlocksPage from '../pages/blocks/BlocksPage';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignInPage} />
      <Route path="/registrar" component={SignUpPage} />

      <Route path="/home" component={HomePage} isPrivate />
      <Route path="/profile" component={ProfilePage} isPrivate />
      <Route path="/blocos" component={BlocksPage} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} isPrivate />
    </Switch>
  );
}

export default Routes;
