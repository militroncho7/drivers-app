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
      const response = await axios.post('http://localhost:1234/auth/login', {
        username,
        password
      });
      window.localStorage.setItem('USER', JSON.stringify(response.data));
      setIsLoginSuccessfull(true);
    } catch (exception) {
      setError(exception.response.data.message);
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
