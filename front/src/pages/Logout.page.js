import React from 'react';
import {Redirect} from 'react-router-dom';

export default function LogoutPage() {
  window.localStorage.removeItem('USER_API_TOKEN');
  return <Redirect to="/" />;
}
