import React from "react";
import { Link, Redirec } from "react-router-dom";

//Components
import Button from "components/ButtonLink/Button";
import LogoMedium from "components/Logos/LogoMedium";

export default function League({ name, onSubmit, onChangeName, error }) {
  return (
    <>
      <div className="login-box">
        <LogoMedium className="size-image" />
        <div>
          <h3>¡Crea tu liga!</h3>
          <form onSubmit={onSubmit}>
            {error.length > 0 && <div>Error: {error}</div>}
            <div className="user-box">
              <input
                type="text"
                onChange={onChangeName}
                required
                value={name}
              />
              <label>Nombre de la liga</label>
            </div>
            <Link to="/new-league">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Busca tu liga
            </Link>
            <div className="container-center">
              <Link type="text" className="button" to="/login">
                <b>Back!</b>
              </Link>
              <Button
                type="submit"
                value="go!"
                whereTo="/league"
                className="button"
              >
                <b>GO!</b>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
