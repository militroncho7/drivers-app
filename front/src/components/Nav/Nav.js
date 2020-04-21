import React, {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

//Components
import Logout from '../Logout/index';

export default function Nav() {
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
                <Logout />
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
