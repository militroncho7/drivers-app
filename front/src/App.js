import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Pages
import HomePage from 'pages/Home.page';
import LoginPage from 'pages/Login.page';
import SignupPage from 'pages/Signup.pages';
import CreateLeaguePage from 'pages/CreateLeague.page';
import LogoutPage from 'pages/Logout.page';
import MarketPage from 'pages/Market.page';
import TeamPage from 'pages/Team.page';
import CircuitsPage from 'pages/Circuits.page';

import PrivateRoute from 'components/Router/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <PrivateRoute path="/league/create" component={CreateLeaguePage} />
        <PrivateRoute path="/market" component={MarketPage} />
        <PrivateRoute path="/team" component={TeamPage} />
        <PrivateRoute path="/circuits" component={CircuitsPage} />
        <PrivateRoute path="/logout" component={LogoutPage} />
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
