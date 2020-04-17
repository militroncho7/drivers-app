import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

//Components
import SignupView from "components/screens/Register/Signup";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSignupSuccessfull, setIsLoginSuccessfull] = useState("false");

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
      setIsLoginSuccessfull(true);
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

  // if (isSignupSuccessfull) {
  //   return <Redirect to="/league" />;
  // }

  return (
    <>
      <SignupView
        onSubmit={handleSubmit}
        onChangeUsername={handleChangeUsername}
        onChangePassword={handleChangePassword}
        onChangeName={handleChangeName}
        onChangeLastname={handleChangeLastname}
        onChangeEmail={handleChangeEmail}
        error={error}
        username={username}
        password={password}
        name={name}
        lastname={lastname}
        email={email}
      />
    </>
  );
}
