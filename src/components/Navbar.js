import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/wine&cheese.png";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container d-flex align-items-center">
        <div>
          <NavLink to="/" className="link">
            <img className="logo" src={logo} alt="site logo" />
          </NavLink>
        </div>
        <div className="nav-links d-flex justify-content-between align-items-center">
          <NavLink to="/wines" className="link wine">
            <div className="nav-wine subtitle">Wine List</div>
          </NavLink>
          <NavLink to="/favorites" className="link fav">
            <div className="nav-fav subtitle">Favorites</div>
          </NavLink>
          <p> | </p>
          <NavLink to="/about" className="link subtitle">
            <div className="nav-about">About</div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
