import React, {useState} from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      // const response = await fetch('url', 'POST', {name, email, password});
      const response = await axios.post('http://localhost:1234', {
        name,
        email,
        password
      });
      const data = JSON.parse(response.data);
      console.log(`Nombre almacenado: ${name}`);
      console.log(`Email almacenado: ${email}`);
      console.log(`Password almacenado: ${password}`);
    } catch (exception) {
      setError(exception.message);
    }
  }

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      {error.length > 0 && <div>Error: {error}</div>}
      <div>
        <label>nombre</label>
        <input type="text" onChange={handleChangeName} />
      </div>
      <div>
        <label>email</label>
        <input type="email" onChange={handleChangeEmail} />
      </div>
      <div>
        <label>contraseña</label>
        <input type="password" onChange={handleChangePassword} />
      </div>
      <button type="submit">¡Regístrame!</button>
    </form>
  );
}

export class RegisterClass extends React.Component {
  state = {
    count: 0
  };

  render() {
    return (
      <>
        <div>Contador: {this.state.count}</div>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Incrementar</button>
      </>
    );
  }
}
