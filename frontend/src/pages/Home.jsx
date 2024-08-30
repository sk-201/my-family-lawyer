import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Disclaimer } from "../components/Disclaimer";
import WhatsApp from "../components/WhatsApp";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import Team from "../components/Team";

import OtherServices from "../components/OtherServices";
const Home = () => {
  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      {showModal === true ? (
        <Disclaimer toggleModal={toggleModal} />
      ) : (
        <div>
          {/* Header */}

          <Header />

          {/* Carousel Start */}
          <div className="container-fluid p-0 mb-5 pb-5">
            <div
              id="header-carousel"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div className="carousel-inner fix-pad">
                <div
                  className="carousel-item position-relative active fix-h"
                  style={{
                    height: "100vh",
                  }}
                >
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/background.jpg"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: "900px" }}>
                      <h3 className="display-2  text-white mb-4">
                        Unlock peace of mind with our <br />
                        Family Law Expertise
                      </h3>
                      <a
                        className="btn btn-primary py-3 px-5 mt-2"
                        href="/contact"
                      >
                        Get an appointment
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item position-relative"
                  style={{ height: "100vh", minHeight: "400px" }}
                >
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/carousel-2.jpg"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: "900px" }}>
                      <h4
                        className="text-white text-uppercase mb-4"
                        style={{ letterSpacing: "3px" }}
                      >
                        Results You Deserve
                      </h4>
                      <h3 className="display-2 text-capitalize text-white mb-4">
                        We prepared to oppose for you
                      </h3>
                      <a className="btn btn-primary py-3 px-5 mt-2" href="#">
                        Call Us Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Carousel End */}

          {/* About Start */}
          <div className="container-fluid py-5">
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-5">
                  <img
                    className="img-fluid rounded"
                    src="img/about.jpg"
                    alt=""
                  />
                </div>
                <div
                  className="col-lg-7 mt-4 mt-lg-0"
                  style={{ textAlign: "justify", textJustify: "inter-word" }}
                >
                  <h1 className="mb-4" style={{ color: "#524f4f" }}>
                    We Provide Reliable And Effective Family Law Services
                  </h1>
                  <p
                    className=" p-3 rounded   "
                    style={{
                      color: "#919191",
                      fontWeight: 700,
                      fontSize: "18px",
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
                    }}
                  >
                    My Family Lawyer Covers a wide range of family related
                    matters. We are committed and constantly working for
                    resolving of family disputes and challenges by way of Court
                    trail, mediation and amicable settlement.
                  </p>
                  <a href="/about" className="btn btn-primary mt-2">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* About End */}
          <div className="container-fluid py-5">
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-12 pt-5 pt-lg-0">
                  <div
                    className=" rounded"
                    style={{ height: "200px", backgroundColor: "#919191" }}
                  >
                    <h1 className="text-white text-center pt-4">Expertise</h1>
                  </div>
                  <div
                    className="owl-carousel service-carousel position-relative"
                    style={{ marginTop: "-100px", padding: "0 30px" }}
                  >
                    <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                      <Services />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className=" text-center pt-4" style={{ color: "#524f4f" }}>
            Other Services
          </h1>
          <OtherServices />

          {/* Services Start */}
          <div className="container-fluid py-5">
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-12 pt-5 pt-lg-0">
                  <div
                    className=" rounded"
                    style={{ height: "200px", backgroundColor: "#919191" }}
                  >
                    <h1 className="text-white text-center pt-4">
                      Why Choose us?
                    </h1>
                  </div>
                  <WhyChoose />
                </div>
              </div>
            </div>
          </div>
          {/* Services End */}

          {/* Team Start */}
          <div className="container-fluid py-5">
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-3">
                  <h1 className="mb-4">Meet Our Team</h1>
                </div>
                <Team />
              </div>
            </div>
          </div>
          {/* to={`https://web.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(
              TEXT
            )}`} */}

          <WhatsApp />
          {/* Team End */}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
