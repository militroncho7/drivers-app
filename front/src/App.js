import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import HomePage from "pages/Home.page";
import RegisterPage from "pages/Register.page";
import SignupPage from "pages/Signup.pages";
import LeaguePage from "pages/League.page";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/league">
          <LeaguePage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
