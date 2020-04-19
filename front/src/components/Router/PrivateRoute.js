import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import isLoggedIn from 'utils/isLoggedIn';

const PrivateRoute = ({component: Component, ...rest}) => {
  console.log(isLoggedIn());
  return (
    <Route
      {...rest}
      render={(props) => (isLoggedIn() ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
