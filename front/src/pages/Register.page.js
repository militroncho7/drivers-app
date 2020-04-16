import React, {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

//Components

import RegisterView from 'components/screens/Register/Register';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoginSuccessfull, setIsLoginSuccessfull] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      // const response = await fetch('url', 'POST', {name, email, password});
      const response = await axios.post('http://localhost:1234/auth/login', {
        username,
        password
      });
      const data = JSON.parse(response.data);
      setIsLoginSuccessfull(true);
      // console.log(`Nombre almacenado: ${username}`);
      // console.log(`Password almacenado: ${password}`);
    } catch (exception) {
      setError(exception.message);
    }
  }

  function handleChangeUsername(event) {
    setUsername(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  if (isLoginSuccessfull) {
    return <Redirect to="/league" />;
  }

  return (
    <RegisterView
      onSubmit={handleSubmit}
      onChangeUsername={handleChangeUsername}
      onChangePassword={handleChangePassword}
      error={error}
      username={username}
      password={password}
    />
  );
}
