import React, {useState} from 'react';

export default function Status({user, league}) {
  return (
    <div>
      <div>
        <ul>
          <li>{league.name}</li>
          <li>{user.name}</li>
          <li>XXXXX €</li>
        </ul>
      </div>
    </div>
  );
}
