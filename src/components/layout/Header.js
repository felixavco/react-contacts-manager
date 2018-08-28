import React from "react";
import PropTypes from "prop-types";
import logo from '../../react.svg';
import { Link, NavLink } from 'react-router-dom';

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 py-2">
      <div className="container">
        <Link exact to="/" className="navbar-brand">
        <img className="rotate" src={logo} width="50" height="50" alt="React Logo" /> &nbsp;
          {branding}
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact to="/" activeStyle={{fontWeight: 'bold'}} className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/add" activeStyle={{fontWeight: 'bold'}} className="nav-link">
                Add
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/about" activeStyle={{fontWeight: 'bold'}} className="nav-link">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "Branding"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
