import React from "react";
import { AiFillStar } from "react-icons/ai";

const HomesCard = ({ home }) => {
  return (
    <div className="card border-0" style={{ width: "14rem" }}>
      <img src={home.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <small>{home.caption}</small>
        <h5 className="card-title">{home.title}</h5>
        <p className="card-text">{home.fee}</p>
        <p className="card-text d-flex">
          <div className="text-success">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          {home.rating}
        </p>
      </div>
    </div>
  );
};

export default HomesCard;
