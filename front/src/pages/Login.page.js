import React, {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

//Components
import RegisterView from 'components/screens/Register/Register';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:1234/auth/login', {
        username,
        password
      });
      window.localStorage.setItem('USER_API_TOKEN', JSON.stringify(response.data));
      setUser(response.data);
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

  if (user) {
    if (user.leagueList && user.leagueList.length > 0) {
      const [league] = user.leagueList;
      return <Redirect to="/market" />;
    }
    return <Redirect to="/league/create" />;
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
