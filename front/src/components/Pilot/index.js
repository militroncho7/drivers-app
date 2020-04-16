import React from 'react';

export default function Pilot({id, name, team, image, teamImage, price, onClickSignUp}) {
  return (
    <div class="pilot">
      <div className="pilot__image">
        <img src={image} alt="name" />
      </div>
      <div className="pilot__info">
        <h3>{name}</h3>
        <div className="pilot__team">
          <img src={teamImage} alt={team} />
          <span>{team}</span>
        </div>
      </div>
      <div className="pilot__actions">
        <button onClick={onClickSignUp}>Fichar</button>
        <span className="pilot__price">{price}</span>
      </div>
    </div>
  );
}
