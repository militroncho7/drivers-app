import React, {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

//Components
import Logout from '../Logout/index';

export default function Nav() {
  const [error, setError] = useState('');
  const [isLogoutSuccessfull, setIsLogoutSuccessfull] = useState(false);

  async function handleLogout(event) {
    event.preventDefault();
    try {
      const response = await axios.get('http://localhost:1234/auth/logout');
      setIsLogoutSuccessfull(true);
    } catch (exception) {
      setError(exception.response.data);
    }
  }

  if (isLogoutSuccessfull) {
    return <Redirect to="/" />;
  }

  return (
    <header id="main-header">
      <div class="container">
        <div id="logo">
          <img
            src="https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586884639/drivers/logo/logo_hrzntl_nympql.png"
            className="image-nav"
            alt="logo-drivers"
          />
        </div>
        <div>
          <input type="checkbox" id="nav-toggle" class="nav-toggle" />
          <nav id="menu">
            <ul>
              <li>
                <Link to="/market">Mercado</Link>
              </li>
              <li>
                <Link to="/team">Equipo</Link>
              </li>
              <li>
                <Link to="#">Puntuación</Link>
              </li>
              <li>
                <Link to="/circuits">Carreras</Link>
              </li>
              <li>
                <Link to="#">Cuenta</Link>
              </li>
              {/* <li>
                <Link to="#">
                  <img
                    src="https://res.cloudinary.com/dhd9jgrw3/image/upload/v1587405138/drivers/logo/User-Interface-Logout-icon_her3mt.png"
                    width="30px"
                  />
                </Link>
              </li> */}
              <li>
                <Logout type={handleLogout} />
              </li>
            </ul>
          </nav>
          <label for="nav-toggle" class="nav-toggle-label">
            <span></span>
          </label>
        </div>
      </div>
    </header>
  );
}
