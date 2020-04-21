import React, {useEffect, useState} from 'react';

import StatusData from 'components/Status/StatusData';

export default function Status() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:1234/auth/profile`)
      .then((res) => res.json())
      .then((users) => {
        setUser(users);
      });
  }, []);

  if (users.length === 0) {
    return <div>Status loading...</div>;
  }
  return (
    <>
      <div>
        {users.filter((user) => (
          <StatusData {...user} />
        ))}
      </div>
    </>
  );
}
