import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import HomePage from "pages/Home.page";
import RegisterPage from "pages/Register.page";
import SignupPage from "pages/Signup.pages";
import LeaguePage from "pages/League.page";
import MarketPage from "pages/Market.page";
import TeamPage from "pages/Team.page";
import CircuitsPage from "pages/Circuits.page";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <RegisterPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/league">
          <LeaguePage />
        </Route>
        <Route path="/market">
          <MarketPage />
        </Route>
        <Route path="/team">
          <TeamPage />
        </Route>
        <Route path="/circuits">
          <CircuitsPage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
