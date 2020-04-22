import React, {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Button from 'components/ButtonLink/Button';
import getLoggedUser from 'utils/getLoggedUser';

export default function LeaguesList({leagues}) {
  const [isJoining, setIsJoining] = useState(false);
  const [joinSuccess, setJoinSuccess] = useState(false);
  async function handleJoinToLeague(leagueId) {
    try {
      const user = getLoggedUser();
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      };
      const response = await axios.post(
        `http://localhost:1234/league/join`,
        {id: leagueId},
        config
      );
      setJoinSuccess(true);
    } catch (exception) {
      console.log(exception);
    }
  }

  if (joinSuccess) {
    return <Redirect to="/market" />;
  }

  return (
    <>
      <div>
        {leagues.map((league) => (
          <div style={{color: 'white'}} key={`league--${league._id}`}>
            {league.name}
            <button
              onClick={() => {
                handleJoinToLeague(league._id);
              }}
            >
              Unirme
            </button>
          </div>
        ))}
      </div>
      {isJoining && <div style={{color: 'white'}}>Uniéndote a la liga...</div>}
    </>
  );
}
