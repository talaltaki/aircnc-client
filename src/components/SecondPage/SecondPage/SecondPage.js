import React from "react";
import Map from "../Map/Map";
import NavbarSecondPage from "../NavbarSecondPage/NavbarSecondPage";
import StayInPreview from "../StayInPreview/StayInPreview";

const SecondPage = () => {
  return (
    <div>
      <NavbarSecondPage />
      <section className="container">
        <div className="row">
          <div className="col-md-6">
            <StayInPreview />
          </div>
          <div className="col-md-6">
            <Map />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondPage;
