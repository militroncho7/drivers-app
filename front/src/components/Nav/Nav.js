import React, {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

//Components
import Logout from '../Logout/index';

export default function Nav() {
  return (
    <header id="main-header">
      <div className="container">
        <div id="logo">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586884639/drivers/logo/logo_hrzntl_nympql.png"
              className="image-nav"
              alt="logo-drivers"
            />
          </Link>
        </div>
        <div>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <nav id="menu">
            <ul>
              <li>
                <Link to="/market">Mercado</Link>
              </li>
              <li>
                <Link to="/team">Equipo</Link>
              </li>
              <li>
                <Link to="/points">Puntuación</Link>
              </li>
              <li>
                <Link to="/circuits">Carreras</Link>
              </li>
              <li>
                <Link to="/profile">Cuenta</Link>
              </li>
              <li>
                <Logout />
              </li>
            </ul>
          </nav>
          <label for="nav-toggle" className="nav-toggle-label">
            <span></span>
          </label>
        </div>
      </div>
    </header>
  );
}
