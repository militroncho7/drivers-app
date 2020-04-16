import React, {useState} from 'react';
import axios from 'axios';
import ButtonLink from 'components/ButtonLink';
import LogoMedium from 'components/Logos/LogoMedium';

export default function Signup() {
  const [newLeague, setNewleague] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:1234/create/league', {
        newLeague
      });
      const data = JSON.parse(response.data);
    } catch (exception) {
      setError(exception.message);
    }
  }

  function handleChangeNewLeague(event) {
    setNewleague(event.target.value);
  }

  return (
    <>
      <div className="login-box">
        <LogoMedium className="sizeImage" />
        <h3>¡Crea tu liga!</h3>
        <form onSubmit={handleSubmit}>
          {error.length > 0 && <div>Error: {error}</div>}
          <div className="user-box">
            <input type="text" onChange={handleChangeNewLeague} required />
            <label>Nombre de la liga</label>
          </div>
          <div className="container-center">
            {/* <ButtonLink type="submit" whereTo="/" className="button">
              <b>GO!</b>
            </ButtonLink> */}

            {/* Repasar para convertir en componente */}
            <button type="submit" value="go" whereTo="/league" className="button" />
            <ButtonLink whereTo="/" className="button">
              <b>Back</b>
            </ButtonLink>
          </div>
        </form>
      </div>
    </>
  );
}
