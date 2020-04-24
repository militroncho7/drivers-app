import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import useUserContext from 'hooks/useUserContext';
import isLoggedIn from 'utils/isLoggedIn';

const PrivateRoute = ({component: Component, ...rest}) => {
  if (isLoggedIn()) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }
  return <Redirect to="/login" />;
};

export default PrivateRoute;
