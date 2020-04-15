import React, { useState } from "react";
import axios from "axios";
import ButtonLink from "components/ButtonLink";
import LogoMedium from "components/Logos/LogoMedium";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:1234/auth/signup", {
        username,
        password,
        name,
        lastname,
        email,
      });
      const data = JSON.parse(response.data);
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

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeLastname(event) {
    setLastname(event.target.value);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  return (
    <>
      <div className="login-box">
        <LogoMedium className="sizeImage" />
        <h3>¡Registrate!</h3>
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
          <div className="user-box">
            <input type="text" onChange={handleChangeName} required />
            <label>Nombre</label>
            <div className="user-box">
              <input type="text" onChange={handleChangeLastname} required />
              <label>Apellido</label>
            </div>
            <div className="user-box">
              <input type="email" onChange={handleChangeEmail} required />
              <label>Correo electrónico</label>
            </div>
          </div>
          <div className="container-center">
            <ButtonLink type="submit" whereTo="/" className="button">
              GO!
            </ButtonLink>
            <ButtonLink whereTo="/" className="button">
              Back
            </ButtonLink>
          </div>
        </form>
      </div>
    </>
  );
}
