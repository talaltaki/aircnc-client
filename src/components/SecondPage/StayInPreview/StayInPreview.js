import React from "react";
import StayInPreviewCard from "./StayInPreviewCard/StayInPreviewCard";

const StayInPreview = () => {
  const apartments = [
    {
      id: 1,
      image: "https://imgur.com/UItwPbP.jpg",
      title: "Light bright airy stylish apt & safe peaceful stay",
      people: "4 guests  2 bedrooms  2 beds  2 baths",
      features: "With Air conditioned Kitchen",
      cancellation: "Cancellation flexibility available",
      rating: "4.9 (20)",
      price: "$34",
      total: "$167 total",
    },
    {
      id: 2,
      image: "https://imgur.com/iZpverx.jpg",
      title: "Apartment in Lost Panorama",
      people: "4 guests  2 bedrooms  2 beds  2 baths",
      features: "With Air conditioned Kitchen",
      cancellation: "Cancellation flexibility available",
      rating: "4.8 (10)",
      price: "$52",
      total: "$167 total",
    },
    {
      id: 3,
      image: "https://imgur.com/AO1d2I8.jpg",
      title: "Light bright airy stylish apt & safe peaceful stay",
      people: "4 guests  2 bedrooms  2 beds  2 baths",
      features: "With Air conditioned Kitchen",
      cancellation: "Cancellation flexibility available",
      rating: "4.9 (25)",
      price: "$44",
      total: "$167 total",
    },
  ];

  return (
    <div>
      <section>
        <p className="text-secondary mt-4">252 stays Apr 13-17 3 guests</p>
        <h5 className="fw-bold">Stay in Dhaka Division</h5>
        <div className="d-flex">
          <small className="fw-light border rounded-pill p-2">
            Cancellation felxibility
          </small>
          <small className="fw-light border rounded-pill p-2 ms-2">
            Type of place
          </small>
          <small className="fw-light border rounded-pill p-2 ms-2">Price</small>
          <small className="fw-light border rounded-pill p-2 ms-2">
            Instant Book
          </small>
          <small className="fw-light border rounded-pill p-2 ms-2">
            More Filters
          </small>
        </div>
      </section>

      <section className="mt-4">
        {apartments.map((apartment) => (
          <StayInPreviewCard key={apartment.id} apartment={apartment} />
        ))}
      </section>
    </div>
  );
};

export default StayInPreview;
