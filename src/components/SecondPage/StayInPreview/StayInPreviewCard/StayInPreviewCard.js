import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const StayInPreviewCard = ({ apartment }) => {
  return (
    <div>
      <div className="card mb-3 border-0" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-6">
            <Link to="">
              <img
                className="img-fluid mt-2"
                style={{ maxWidth: "255px", borderRadius: "15px" }}
                src={apartment.image}
                alt={apartment.title}
              />
            </Link>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h6 className="card-title">{apartment.title}</h6>
              <small className="card-text fw-light">{apartment.people}</small>
              <br />
              <small className="card-text fw-light">{apartment.features}</small>
              <div className="mt-2">
                <small className="card-text fw-light">
                  {apartment.cancellation}
                </small>
              </div>
              <div className="mt-2 d-flex">
                <div className="col-md-6">
                  <small className="card-text fw-bold">
                    <AiFillStar className="text-success mb-1 me-1" />
                    {apartment.rating}
                  </small>
                </div>
                <div className="col-md-6">
                  <small className="card-text fw-bold">
                    {apartment.price}/<small>night</small>
                  </small>
                  <br />
                  <small className="card-text fw-light">
                    {apartment.total}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-secondary" />
    </div>
  );
};

export default StayInPreviewCard;
