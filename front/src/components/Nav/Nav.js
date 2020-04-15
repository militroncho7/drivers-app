import React from "react";

export default function Nav() {
  return (
    <header id="main-header">
      <div class="container">
        <h1 id="logo">
          <img
            src="https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586884639/drivers/logo/logo_hrzntl_nympql.png"
            className="image-nav"
            alt="logo-drivers"
          />
        </h1>
        <input type="checkbox" id="nav-toggle" class="nav-toggle" />
        <nav id="menu">
          <ul>
            <li>
              <a href="#">Mercado</a>
            </li>
            <li>
              <a href="#">Equipo</a>
            </li>
            <li>
              <a href="#">Ofertas</a>
            </li>
            <li>
              <a href="#">Puntuación</a>
            </li>
            <li>
              <a href="#">Carreras</a>
            </li>
            <li>
              <a href="#">Cuenta</a>
            </li>
          </ul>
        </nav>
        <label for="nav-toggle" class="nav-toggle-label">
          <span></span>
        </label>
      </div>
    </header>
  );
}
