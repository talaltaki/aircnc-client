import React from "react";
import { AiFillStar } from "react-icons/ai";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="card border-0" style={{ width: "11rem" }}>
      <img src={experience.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <small>{experience.caption}</small>
        <h5 className="card-title">{experience.title}</h5>
        <p className="card-text">{experience.fee}</p>
        <p className="card-text d-flex">
          <div className="text-success">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          {experience.rating}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
