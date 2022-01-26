import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../Logo.png';
import Navbar from 'react-bootstrap/Navbar'

function Navigation() {
  return (
    <div className="navigation">
      <Navbar bg="dark"  variant="dark" expand="lg">
      <NavLink className="navbar-brand" to="/">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Igor Bich logo"
          />
        </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/resume">
                  Resume
                </NavLink>
              </li>
            </ul>
          </div>

      </Navbar>
    </div>
  );
}

export default Navigation;