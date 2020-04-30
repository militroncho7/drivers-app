import React, {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import getLoggedUser from 'utils/getLoggedUser';
import Loading from 'components/Loading/index';

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
      // console.log(exception);
    }
  }

  if (joinSuccess) {
    return <Redirect to="/market" />;
  }

  return (
    <>
      <div className="find-league">
        {leagues.map((league) => (
          <div key={`league--${league._id}`}>
            {league.name}
            <button
              className="mini-button"
              onClick={() => {
                handleJoinToLeague(league._id);
              }}
            >
              Unéte
            </button>
          </div>
        ))}
      </div>
      {isJoining && <Loading />}
    </>
  );
}
