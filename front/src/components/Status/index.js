import React, {useEffect, useState} from 'react';
import axios from 'axios';
import StatusData from 'components/Status/StatusData';
import useUserContext from 'hooks/useUserContext';
import Loading from 'components/Loading/index';
import './style.css';

export default function Status() {
  const {user, setUser} = useUserContext();

  useEffect(() => {
    async function fetchData() {
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

  return <StatusData league={user.league} user={user} />;
}
