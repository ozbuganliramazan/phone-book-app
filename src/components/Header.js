import React from "react";
import phone from "../assets/imgs/phone.gif";

import { Link } from "react-router-dom";

const Header = () => {
  
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
        <img src={phone} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/lastCall">
               Son Aramalar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/my-missed-call">
               Cevapsız Aramalar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;