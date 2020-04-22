import React from 'react';
import {Link, Redirec} from 'react-router-dom';

//Components
import Button from 'components/ButtonLink/Button';
import LeaguesList from 'components/LeaguesList';
import LogoMedium from 'components/Logos/LogoMedium';
import Alert from 'components/Alert';

export default function League({name, onSubmit, onChangeName, error, isSearching, leagues}) {
  return (
    <>
      <div className="login-box">
        <LogoMedium className="size-image" />
        <div>
          <h3>¡Busca tu liga!</h3>
          <form onSubmit={onSubmit}>
            {error.length > 0 && <Alert type="danger">Error: {error}</Alert>}
            <div className="user-box">
              <input type="text" onChange={onChangeName} required value={name} />
              <label>Nombre de la liga</label>
            </div>
            <div className="container-center">
              <Button type="submit" className="button">
                <b>Buscar!</b>
              </Button>
            </div>
          </form>
          <div>
            {isSearching && <div style={{color: 'white'}}>Buscando ligas</div>}
            {leagues && leagues.length > 0 && <LeaguesList leagues={leagues} />}
            {leagues && leagues.length === 0 && <div>No se han encontrado ligas</div>}
          </div>
          <Link to="/league/create">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Crea una liga
          </Link>
        </div>
      </div>
    </>
  );
}
