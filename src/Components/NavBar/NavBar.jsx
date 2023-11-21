import React from 'react';
import './NavBar.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Store/AuthSlice';

function Navbar() {
  // Use the correct state variable name in the useSelector function
  const auth = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logout action when the "LogOut" button is clicked
    dispatch(logout());
  };

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
              <a className="nav-link active" aria-current="page" href="#Card">
                Our Products
              </a>
            </li>
            <li className="nav-item topHeader">
              <a className="nav-link active" aria-current="page" href="/">
                Compatible Phones
              </a>
            </li>
            <li className="nav-item topHeader">
              <a className="nav-link active" aria-current="page" href="#Form">
                Support
              </a>
            </li>
            <li className="nav-item topHeader">
              <a className="nav-link active" aria-current="page" href="/">
                Track Order
              </a>
            </li>
            {auth ? (
              <li className="nav-item singIn">
                <button onClick={handleLogout} className="nav-link active">
                  LogOut
                </button>
              </li>
            ) : (
              <li className="nav-item singIn">
                <a className="nav-link active" href="/login">
                  Sign In
                </a>
              </li>
            )}
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
