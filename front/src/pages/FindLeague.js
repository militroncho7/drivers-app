import React, {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

//Components
import FindLeagueView from 'components/screens/FindLeague';
import getLoggedUser from 'utils/getLoggedUser';

export default function FindLeague() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [leagues, setLeagues] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const user = getLoggedUser();
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        },
        params: {
          name
        }
      };
      setIsSearching(true);
      const response = await axios.get(`http://localhost:1234/league/find`, config);
      setLeagues(response.data);
      setIsSearching(false);
    } catch (exception) {
      setError(exception.response.data.message);
    }
  }

  function handleChangeName(event) {
    setName(event.target.value);
  }

  return (
    <FindLeagueView
      onSubmit={handleSubmit}
      onChangeName={handleChangeName}
      error={error}
      newLeague={name}
      value="Go!"
      leagues={leagues}
      isSearching={isSearching}
    />
  );
}
