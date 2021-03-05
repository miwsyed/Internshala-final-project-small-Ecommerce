import React from 'react';
import { Switch } from 'react-router';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';

import './styles/main.scss';
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/profile.context';
import HeadPhones from './pages/HeadPhones';
import KeyBoards from './pages/KeyBoards';
import data from './data';

const App = () => {
  const { products } = data;

  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <SignIn />
        </PublicRoute>
        {/* for only logged in persons */}
        <PrivateRoute path="/">
          <Home products={products} />
        </PrivateRoute>
        <PrivateRoute path="/headphones">
          <HeadPhones products={products} />
        </PrivateRoute>
        <PrivateRoute path="/Keyboards">
          <KeyBoards products={products} />
        </PrivateRoute>
      </Switch>
    </ProfileProvider>
  );
};

export default App;
