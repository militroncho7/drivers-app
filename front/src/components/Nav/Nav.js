import React from "react";
import { Link } from "react-router-dom";

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
                <Link to="#">Mercado</Link>
              </li>
              <li>
                <Link to="#">Equipo</Link>
              </li>
              <li>
                <Link to="#">Ofertas</Link>
              </li>
              <li>
                <Link to="#">Puntuación</Link>
              </li>
              <li>
                <Link to="#">Carreras</Link>
              </li>
              <li>
                <Link to="#">Cuenta</Link>
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
