import React from 'react';
import './style.css';

//Components
import Button from 'components/ButtonLink/Button';
// import Alert from 'components/Alert';

export default function EditProfile({
  username,
  name,
  lastname,
  email,
  onSubmit,
  onChangeUsername,
  onChangeName,
  onChangeLastname,
  onChangeEmail,
  error
}) {
  return (
    <>
      <div className="edit-box">
        <h3>Actuliza tus datos</h3>
        <form onSubmit={onSubmit}>
          {/* {error.length > 0 && <Alert type="danger">Error: {error}</Alert>} */}
          <div className="user-box">
            <input type="text" onChange={onChangeUsername} required value={username} />
            <label>Nombre de Usuario</label>
          </div>
          <div className="user-box">
            <input type="text" onChange={onChangeName} required value={name} />
            <label>Nombre</label>
            <div className="user-box">
              <input type="text" onChange={onChangeLastname} required value={lastname} />
              <label>Apellido</label>
            </div>
            <div className="user-box">
              <input type="text" onChange={onChangeEmail} required value={email} />
              <label>Correo electrónico</label>
            </div>
          </div>
          <div className="container-center">
            <Button type="submit" className="button">
              <b>OK</b>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
