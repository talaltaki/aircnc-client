import React from "react";
import NavbarHome from "../NavbarHome/NavbarHome";
import Preview from "../Preview/Preview";
import Search from "../Search/Search";

const Home = () => {
  return (
    <div>
      <NavbarHome />
      <p className="container mt-5 fw-bold">Where do you want to go?</p>
      <section className="container">
        <div className="row">
          <div className="col-md-4">
            <Search />
          </div>
          <div className="col-md-8">
            <Preview />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
