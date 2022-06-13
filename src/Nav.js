import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Nav = () => {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark  ">
        <p id="demo"></p>

        <div>
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/unos">
                Unos
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
