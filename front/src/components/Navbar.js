import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="navbar-container">
        <NavLink to="/">
          <li className="navbar-titem"> Accueil</li>
        </NavLink>
        <NavLink to="/profil">
          <li className="navbar-titem">Profil</li>
        </NavLink>
        <NavLink to="/mon-compte">
          <li className="navbar-titem">Mes paramètres</li>
        </NavLink>
      </ul>
    </nav>
  );
}
