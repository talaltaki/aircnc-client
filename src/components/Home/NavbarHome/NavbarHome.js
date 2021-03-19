import React from "react";

const NavbarHome = () => {
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
            <div className="navbar-nav ms-auto me-md-5">
              <a className="nav-link me-4" aria-current="page" href="#">
                Host your home
              </a>
              <a className="nav-link me-4" href="#">
                Host your experience
              </a>
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

export default NavbarHome;
