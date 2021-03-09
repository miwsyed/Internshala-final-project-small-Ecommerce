import React, { memo } from 'react';
import { Switch } from 'react-router';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import './styles/main.scss';
import PublicRoute from './components/PublicRoute';
import HeadPhones from './pages/HeadPhones';
import KeyBoards from './pages/KeyBoards';
import { ProfileProvider } from './context/profile.context';

const App = () => {
  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <SignIn />
        </PublicRoute>
        {/* for only logged in persons */}
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
        <PrivateRoute path="/headphones">
          <HeadPhones />
        </PrivateRoute>
        <PrivateRoute path="/Keyboards">
          <KeyBoards />
        </PrivateRoute>
      </Switch>
    </ProfileProvider>
  );
};

export default memo(App);
