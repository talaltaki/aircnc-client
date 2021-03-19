import React from "react";
import HomesCard from "./HomesCard/HomesCard";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

const Preview = () => {
  const experiences = [
    {
      id: 1,
      image: "",
      caption: "NIGHT LIFE - NEW YORK",
      title: "Discover the City's Party Scene",
      fee: "$35 per person",
      rating: "64",
    },
    {
      id: 2,
      image: "",
      caption: "ENTERTAINMENT - VANCOUVER",
      title: "Tour with an Enthusiastic Local",
      fee: "$32 per person",
      rating: "100",
    },
    {
      id: 3,
      image: "",
      caption: "PHOTO CLASS - LOS ANGELES",
      title: "Must Have L.A. Pictures",
      fee: "$39 per person",
      rating: "179",
    },
    {
      id: 4,
      image: "",
      caption: "PHOTOGRAPHY - NEW YORK",
      title: "Retro Photo shoot in NYC",
      fee: "$49 per person",
      rating: "72",
    },
  ];

  const homes = [
    {
      id: 1,
      image: "",
      caption: "NIGHT LIFE - NEW YORK",
      title: "Unique Cob Cottage",
      fee: "$128 per person",
      rating: "264",
    },
    {
      id: 2,
      image: "",
      caption: "NIGHT LIFE - NEW YORK",
      title: "The Joshua Tree House",
      fee: "$250 per person",
      rating: "269",
    },
    {
      id: 3,
      image: "",
      caption: "NIGHT LIFE - NEW YORK",
      title: "A Pirate's Life for Me - Houseboat!",
      fee: "$209 per person",
      rating: "140",
    },
  ];

  return (
    <div className="container">
      <section>
        <p className="fw-bold">Experiences</p>

        <div className="row">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>

      <section>
        <p className="fw-bold mt-5">Homes</p>

        <div className="row">
          {homes.map((home) => (
            <HomesCard key={home.id} home={home} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Preview;
