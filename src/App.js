import React, { memo } from 'react';
import { Switch } from 'react-router';
import { Container } from 'reactstrap';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import './styles/main.scss';
import PublicRoute from './components/PublicRoute';
import HeadPhones from './pages/HeadPhones';
import KeyBoards from './pages/KeyBoards';
import { ProfileProvider } from './context/profile.context';
import Basket from './pages/Basket';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <ProfileProvider>
      <Navbar />
      <Switch>
        <PublicRoute path="/signin">
          <SignIn />
        </PublicRoute>
        {/* for only logged in persons */}
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
        <PrivateRoute exact path="/headphones">
          <HeadPhones />
        </PrivateRoute>
        <PrivateRoute exact path="/keyboards">
          <KeyBoards />
        </PrivateRoute>
        <Container>
          <PrivateRoute exact path="/basket">
            <Basket />
          </PrivateRoute>
        </Container>
      </Switch>
    </ProfileProvider>
  );
};

export default memo(App);
