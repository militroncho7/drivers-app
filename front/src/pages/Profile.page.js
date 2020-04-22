import React, {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

//Components
import Nav from 'components/Nav/Nav';
import Status from 'components/Status/index';
import EditProfile from 'components/Profile/index';
import Footer from 'components/Footer/Footer';
// import Loading from 'components/Loading/index';

export default function Profile() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isEditSuccessfull, setIsEditSuccessfull] = useState(false);

  async function handleEdit(event) {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:1234/auth/edit', {
        username,
        name,
        lastname,
        email
      });
      setIsEditSuccessfull(true);
    } catch (exception) {
      setError(exception.response.data.message);
    }
  }

  function handleChangeUsername(event) {
    setUsername(event.target.value);
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

  if (isEditSuccessfull) {
    return <Redirect to="/market" />;
  }

  return (
    <>
      <Nav />
      <Status />
      <EditProfile
        onSubmit={handleEdit}
        onChangeUsername={handleChangeUsername}
        onChangeName={handleChangeName}
        onChangeLastname={handleChangeLastname}
        onChangeEmail={handleChangeEmail}
        error={error}
        username={username}
        name={name}
        lastname={lastname}
        email={email}
      />

      <Footer className="fixed-footer" />
    </>
  );
}
