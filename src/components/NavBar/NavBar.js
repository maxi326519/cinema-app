import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";

import "./Navbar.scss";

export default function NavBar() {
  return (
    <header className="navbar nav-light">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            id="logoHenry"
            src={Logo}
            className="d-inline-block align-top"
            alt=""
          />
          <p>Movie App</p>
        </div>
        <nav>
          <ul className="list">
            <li className="list-item">
              <Link exact to="/">Home</Link>
              <Link to="/favs">favourites</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
