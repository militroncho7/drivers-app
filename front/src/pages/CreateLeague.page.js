import React, {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

//Components
import LeagueView from 'components/screens/Register/League';
import getLoggedUser from 'utils/getLoggedUser';

export default function CreateLeague() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isCreateLeague, setIsCreateLeague] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const user = getLoggedUser();
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      };
      const response = await axios.post(
        'http://localhost:1234/league/create',
        {
          name
        },
        config
      );
      setIsCreateLeague(true);
    } catch (exception) {
      setError(exception.response.data.message);
    }
  }

  function handleChangeName(event) {
    setName(event.target.value);
  }

  if (isCreateLeague) {
    return <Redirect to="/market" />;
  }

  return (
    <LeagueView
      onSubmit={handleSubmit}
      onChangeName={handleChangeName}
      error={error}
      newLeague={name}
      value="Go!"
    />
  );
}
