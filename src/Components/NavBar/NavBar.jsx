import React from 'react';
import './NavBar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="img/logo.png" alt="logo" width="100px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item topHeader">
              <a className="nav-link active" aria-current="page" href="/">
                Our Products
              </a>
            </li>
            <li className="nav-item topHeader">
              <a className="nav-link active" aria-current="page" href="/">
                Compatible Phones
              </a>
            </li>
            <li className="nav-item topHeader">
              <a className="nav-link active" aria-current="page" href="/">
                Support
              </a>
            </li>
            <li className="nav-item topHeader">
              <a className="nav-link active" aria-current="page" href="/">
                Track Order
              </a>
            </li>
            <li className="nav-item singIn">
              <a className="nav-link active" aria-current="page" href="/">
                Sign In
              </a>
            </li>
            <li className="nav-item singIn">
              <a className="nav-link active" aria-current="page" href="/">
                <i className="fa-sole"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
