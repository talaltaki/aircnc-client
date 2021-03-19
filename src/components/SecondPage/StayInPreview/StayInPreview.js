import React from "react";

const StayInPreview = () => {
  const apartments = [
    {
      id: 1,
      image: "",
      title: "Light bright airy stylish apt & safe peaceful stay",
      people: "4 guests  2 bedrooms  2 beds  2 baths",
      features: "With Air conditioned Kitchen",
      cancellation: "Cancellation flexibility available",
      rating: "4.9 (20)",
      price: "$34/night",
      total: "$167 total",
    },
    {
      id: 2,
      image: "",
      title: "Apartment in Lost Panorama",
      people: "4 guests  2 bedrooms  2 beds  2 baths",
      features: "With Air conditioned Kitchen",
      cancellation: "Cancellation flexibility available",
      rating: "4.8 (10)",
      price: "$52/night",
      total: "$167 total",
    },
    {
      id: 1,
      image: "",
      title: "Light bright airy stylish apt & safe peaceful stay",
      people: "4 guests  2 bedrooms  2 beds  2 baths",
      features: "With Air conditioned Kitchen",
      cancellation: "Cancellation flexibility available",
      rating: "4.9 (25)",
      price: "$44/night",
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
        <div className="card mb-3 border-0" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="..." alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StayInPreview;
