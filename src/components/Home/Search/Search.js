import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div>
      <div class="card shadow bg-body rounded-3 border-0">
        <div class="card-body">
          <small className="fw-bold ms-2">LOCATION</small>
          <div class="input-group input-group-sm">
            <input
              type="text"
              className="form-control border-0 "
              placeholder="Add City, Landmark, or Address"
            />
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-6">
          <div class="card shadow bg-body rounded-3 border-0">
            <div class="card-body row">
              <div className="col-9">
                <small className="ms-2 text-secondary">Arrival</small>
                <br />
                <small className="fw-bold ms-2">12/04/2021</small>
              </div>
              <div className="col-3">
                <AiOutlineCalendar className="mt-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 mt-md-0">
          <div class="card shadow bg-body rounded-3 border-0">
            <div class="card-body row">
              <div className="col-9">
                <small className="ms-2 text-secondary">Departure</small>
                <br />
                <small className="fw-bold ms-2">14/04/2021</small>
              </div>
              <div className="col-3">
                <AiOutlineCalendar className="mt-3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card shadow bg-body rounded-3 border-0 mt-3">
        <div class="card-body">
          <small className="ms-2 text-secondary">Guests</small>
          <br />
          <small className="fw-bold ms-2">2 ADULTS, 1 CHILD</small>
        </div>
        <hr />
        <div class="card-body">
          <small className="ms-2 fw-bold">ADULTS</small>
          <br />
          <br />
          <small className="ms-2 fw-bold">CHILD</small>
          <br />
          <small className="text-secondary ms-2">Age 2-12</small>
          <br />
          <br />
          <small className="ms-2 fw-bold">BABIES</small>
          <br />
          <small className="text-secondary ms-2">Younger than 2</small>
          <br />
          <br />
          <div className="d-flex">
            <button
              type="button"
              className="btn btn-outline-success btn-sm ms-auto fw-bold px-4"
            >
              APPLY
            </button>
          </div>
        </div>
      </div>
      <Link to="/second-page">
        <div className="d-grid mt-3 mb-5">
          <button className="btn btn-success py-2 rounded-3" type="button">
            <FiSearch className="mb-1" /> Search
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Search;
