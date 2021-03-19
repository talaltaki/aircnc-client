import React from "react";
import { FiSearch } from "react-icons/fi";

const NavbarSecondPage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent fw-bold border border-top-0 border-end-0 border-start-0">
        <div className="container">
          <a className="navbar-brand fs-3" href="/">
            Aircnc
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="mx-auto d-flex">
              <div className="card border-0 shadow rounded-start">
                <div className="card-body">Dhaka Division, Bangladesh</div>
              </div>
              <div className="card border-0 shadow rounded-0">
                <div className="card-body">Apr 13-17</div>
              </div>
              <div className="card border-0 shadow rounded-end">
                <div className="card-body">
                  3 Guests <FiSearch className="mb-1 ms-4 text-success" />
                </div>
              </div>
            </div>
            <div className="navbar-nav ms-auto me-md-5">
              <a className="nav-link me-4" href="#">
                Help
              </a>
              <a className="nav-link me-4" href="#">
                Log in
              </a>
              <a
                type="button"
                className="nav-link btn btn-success rounded-pill text-white"
                href="#"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarSecondPage;
