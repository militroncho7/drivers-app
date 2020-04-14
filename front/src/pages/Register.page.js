import React, { useState } from "react";
import axios from "axios";
import ButtonLink from "components/ButtonLink/Index";
import LogoMedium from "components/Logos/LogoMedium";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      // const response = await fetch('url', 'POST', {name, email, password});
      const response = await axios.post("http://localhost:3000/auth/login", {
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

  function handleChangeUserame(event) {
    setUsername(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <>
      <div className="login-box">
        <LogoMedium className="sizeImage" />
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          {error.length > 0 && <div>Error: {error}</div>}
          <div className="user-box">
            <input type="text" onChange={handleChangeUserame} required />
            <label>Nombre de Usuario</label>
          </div>
          <div className="user-box">
            <input type="password" onChange={handleChangePassword} />
            <label>Contraseña</label>
          </div>
        </form>

        <ButtonLink type="submit" whereTo="/" className="button" id="light">
          GO!
        </ButtonLink>
      </div>
    </>
  );
}
