import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Pages
import HomePage from 'pages/Home.page';
import LoginPage from 'pages/Login.page';
import SignupPage from 'pages/Signup.pages';
import CreateLeaguePage from 'pages/CreateLeague.page';
import FindLeaguePage from 'pages/FindLeague';
import LogoutPage from 'pages/Logout.page';
import MarketPage from 'pages/Market.page';
import TeamPage from 'pages/Team.page';
import CircuitsPage from 'pages/Circuits.page';
import PointsPage from 'pages/Points.page';
import ProfilePage from 'pages/Profile.page';
import PrivateRoute from 'components/Router/PrivateRoute';

import isLoggedIn from 'utils/isLoggedIn';
import getLoggedUser from 'utils/getLoggedUser';
import useUserContext from 'hooks/useUserContext';

const App = () => {
  const {user, setUser} = useUserContext();
  if (isLoggedIn() && !user) {
    setUser(getLoggedUser());
  }
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
        <PrivateRoute path="/league/find" component={FindLeaguePage} />
        <PrivateRoute path="/market" component={MarketPage} />
        <PrivateRoute path="/team" component={TeamPage} />
        <PrivateRoute path="/points" component={PointsPage} />
        <PrivateRoute path="/circuits" component={CircuitsPage} />
        <PrivateRoute path="/profile" component={ProfilePage} />
        <PrivateRoute path="/logout" component={LogoutPage} />
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
