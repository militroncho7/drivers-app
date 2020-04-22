import React, {useEffect, useState} from 'react';
import axios from 'axios';
import StatusData from 'components/Status/StatusData';
import getLoggedUser from 'utils/getLoggedUser';
import Loading from 'components/Loading/index';
import './style.css';

export default function Status() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const user = getLoggedUser();
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      };
      const response = await axios.get('http://localhost:1234/auth/profile', config);
      setUser(response.data);
    }
    fetchData();
  }, []);

  if (!user) {
    return <Loading />;
  }

  const [league] = user.leagueList;
  const userData = user;

  return <StatusData league={league} user={userData} />;
}
