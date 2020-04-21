import React, {useState} from 'react';

export default function Status({id, username, money, league}) {
  return (
    <>
      <div>
        <div>
          <ul>
            <li>{league}</li>
            <li>{username}</li>
            <li>{money} €</li>
          </ul>
        </div>
      </div>
    </>
  );
}
