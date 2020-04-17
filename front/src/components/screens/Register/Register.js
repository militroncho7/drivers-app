import React from "react";
import { Link, Redirect } from "react-router-dom";

//Components
import Button from "components/ButtonLink/Button";
import LogoMedium from "components/Logos/LogoMedium";

export default function Register({
  username,
  password,
  onSubmit,
  onChangeUsername,
  onChangePassword,
  error,
}) {
  return (
    <>
      <div className="login-box">
        <LogoMedium className="size-image" />
        <h3>¡Inicia sesión!</h3>
        <form onSubmit={onSubmit}>
          {error.length > 0 && <div>Error: {error}</div>}
          <div className="user-box">
            <input
              type="text"
              onChange={onChangeUsername}
              required
              value={username}
            />
            <label>Nombre de Usuario</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              onChange={onChangePassword}
              required
              value={password}
            />
            <label>Contraseña</label>
          </div>
          <Link to="/signup">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            ¿No tienes una cuenta?
          </Link>
          <div className="container-center">
            <Button type="submit" className="button">
              <b>GO!</b>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
