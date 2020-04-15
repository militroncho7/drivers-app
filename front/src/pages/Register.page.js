import React, { useState } from "react";
import axios from "axios";

//Components
import ButtonLink from "components/ButtonLink";
import LogoMedium from "components/Logos/LogoMedium";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      // const response = await fetch('url', 'POST', {name, email, password});
      const response = await axios.post("http://localhost:1234/auth/login", {
        username,
        password,
      });
      const data = JSON.parse(response.data);
      // console.log(`Nombre almacenado: ${username}`);
      // console.log(`Password almacenado: ${password}`);
    } catch (exception) {
      setError(exception.message);
    }
  }

  function handleChangeUsername(event) {
    setUsername(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <>
      <div className="login-box">
        <LogoMedium className="sizeImage" />
        <h3>¡Inicia sesión!</h3>
        <form onSubmit={handleSubmit}>
          {error.length > 0 && <div>Error: {error}</div>}
          <div className="user-box">
            <input type="text" onChange={handleChangeUsername} required />
            <label>Nombre de Usuario</label>
          </div>
          <div className="user-box">
            <input type="password" onChange={handleChangePassword} required />
            <label>Contraseña</label>
          </div>
          <a href="/signup">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            ¿No tienes una cuenta?
          </a>
          <ButtonLink type="submit" whereTo="/league" className="button">
            <b>GO!</b>
          </ButtonLink>
        </form>
      </div>
    </>
  );
}
