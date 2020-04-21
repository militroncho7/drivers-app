import React, {useEffect, useState} from 'react';
import axios from 'axios';
import StatusData from 'components/Status/StatusData';
import getLoggedUser from 'utils/getLoggedUser';

export default function Status() {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    const user = getLoggedUser();
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };
    const response = await axios.get('http://localhost:1234/auth/profile', config);
    setUser(response.data);
  }, []);

  if (!user) {
    return <div>Status loading...</div>;
  }

  const [league] = user.leagueList;

  return (
    <div>
      <StatusData user={user} league={league} />
    </div>
  );
}
