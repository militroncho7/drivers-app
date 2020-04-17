import React from "react";
import { Link, Redirect } from "react-router-dom";

//Components
import Button from "components/ButtonLink/Button";
import LogoMedium from "components/Logos/LogoMedium";

export default function Signup({
  username,
  password,
  name,
  lastname,
  email,
  onSubmit,
  onChangeUsername,
  onChangePassword,
  onChangeName,
  onChangeLastname,
  onChangeEmail,
  error,
}) {
  return (
    <>
      <div className="login-box">
        <LogoMedium className="size-image" />
        <h3>¡Registrate!</h3>
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
          <div className="user-box">
            <input type="text" onChange={onChangeName} required value={name} />
            <label>Nombre</label>
            <div className="user-box">
              <input
                type="text"
                onChange={onChangeLastname}
                required
                value={lastname}
              />
              <label>Apellido</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                onChange={onChangeEmail}
                required
                value={email}
              />
              <label>Correo electrónico</label>
            </div>
          </div>
          <div className="container-center">
            <Button type="submit" className="button">
              <b>GO!</b>
            </Button>
            <Link type="text" className="button" to="/login">
              <b>Back!</b>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}