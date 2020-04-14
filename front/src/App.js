import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// import { Link } from "react-router-dom";
// import { ButtonLink } from "./components/ButtonLink"
// import LogoDrivers from "./components/Logos";

import HomePage from 'pages/Home.page';
import RegisterPage, {RegisterClass} from 'pages/Register.page';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
