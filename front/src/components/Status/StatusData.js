import React, {useState} from 'react';
import './style.css';

export default function Status({league, user}) {
  return (
    <div className="status-card">
      <div>
        <b>Campeonato: </b>
        {league.name}
      </div>
      <div>
        {user.name}: <b>{user.money} €</b>
      </div>
    </div>
  );
}
