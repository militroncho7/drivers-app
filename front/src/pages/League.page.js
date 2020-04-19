import React, {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

//Components
import LeagueView from 'components/screens/Register/League';
import getLoggedUser from 'utils/getLoggedUser';

export default function League() {
  const [newLeague, setNewleague] = useState('');
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
          newLeague
        },
        config
      );
      setIsCreateLeague(true);
    } catch (exception) {
      setError(exception.response.data.message);
    }
  }

  function handleChangeNewLeague(event) {
    setNewleague(event.target.value);
  }

  if (isCreateLeague) {
    return <Redirect to="/market" />;
  }

  return (
    <LeagueView
      onSubmit={handleSubmit}
      onChangeName={handleChangeNewLeague}
      error={error}
      newLeague={newLeague}
      value="Go!"
    />
  );
}
