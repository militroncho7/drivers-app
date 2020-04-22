import React from 'react';
import {Link, Redirec} from 'react-router-dom';

//Components
import Button from 'components/ButtonLink/Button';
import LogoMedium from 'components/Logos/LogoMedium';
import Alert from 'components/Alert';

export default function League({name, onSubmit, onChangeName, error}) {
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
            <Link to="/league/create">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              ¡No tengo liga!
            </Link>
            <div className="container-center">
              <Link type="text" className="button" to="/league/create">
                <b>Back!</b>
              </Link>
              <Button type="submit" value="go!" className="button">
                <b>GO!</b>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
