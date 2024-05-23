import React from 'react';
import './Navbar.css';
import logo from '../world-news.png'; 

const Navbar = () => {
  return (
    <nav className="navbar custom-navbar" data-bs-theme="dark">
      <div className="container-fluid justify-content-center">
        <a className="navbar-brand centered-brand" href="#">
          <img src={logo} alt="World News Logo" className="navbar-logo" /> 
          <b>NEWS 24/7</b>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
