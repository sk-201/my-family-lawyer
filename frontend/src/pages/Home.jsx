import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Appointment from "../components/Appointment";
import { Disclaimer } from "../components/Disclaimer";
import WhatsApp from "../components/WhatsApp";

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
              <div className="carousel-inner">
                <div
                  className="carousel-item position-relative active"
                  style={{ height: "100vh", minHeight: "400px" }}
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
                    style={{ objectFit: "cover" }}
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
                <div className="col-lg-7 mt-4 mt-lg-0">
                  <h1 className="mb-4">
                    We Provide Reliable And Effective Family Law Services
                  </h1>
                  <p
                    className=" p-3 rounded   "
                    style={{
                      color: "#bf5324",
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
                    style={{ height: "200px", backgroundColor: "#bf5324" }}
                  >
                    <h1 className="text-white text-center pt-4">
                      Our Services
                    </h1>
                  </div>
                  <div
                    className="owl-carousel service-carousel position-relative"
                    style={{ marginTop: "-100px", padding: "0 30px" }}
                  >
                    <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                      <div
                        className="icon-box  text-primary mt-2 mb-4"
                        style={{ backgroundColor: "#bf5324" }}
                      >
                        <i
                          className="fa fa-2x fa-users"
                          style={{ color: "#fff" }}
                        ></i>
                      </div>

                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "20px",
                        }}
                      >
                        <div
                          style={{ backgroundColor: "#bf5324", color: "#fff" }}
                        >
                          Marriage, Divorce
                        </div>
                        <div style={{ color: "#000000" }}>
                          Dowry, Domestic Violence
                        </div>
                        <div
                          style={{ backgroundColor: "#bf5324", color: "#fff" }}
                        >
                          Maintenance, Child custody
                        </div>
                        <div style={{ color: "#000000" }}>
                          Visitation Rights, Adoption
                        </div>
                        <div
                          style={{ backgroundColor: "#bf5324", color: "#fff" }}
                        >
                          Live-in-relationship, Alimony
                        </div>
                        <div style={{ color: "#000000" }}>
                          Special Marriage Act
                        </div>
                        <div
                          style={{ backgroundColor: "#bf5324", color: "#fff" }}
                        >
                          Family Settlement
                        </div>
                        <div style={{ color: "#000000" }}>
                          Will, Deed, Mutation
                        </div>
                        <div
                          style={{ backgroundColor: "#bf5324", color: "#fff" }}
                        >
                          Property Disputes.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Start */}
          <div className="container-fluid py-5">
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-12 pt-5 pt-lg-0">
                  <div
                    className=" rounded"
                    style={{ height: "200px", backgroundColor: "#bf5324" }}
                  >
                    <h1 className="text-white text-center pt-4">
                      Why Choose us?
                    </h1>
                  </div>
                  <div
                    className="owl-carousel service-carousel position-relative"
                    style={{ marginTop: "-100px", padding: "0 30px" }}
                  >
                    <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                      <div
                        className="icon-box  text-primary mt-2 mb-4"
                        style={{ backgroundColor: "#bf5324" }}
                      >
                        <i
                          className="fa fa-2x fa-users"
                          style={{ color: "#fff" }}
                        ></i>
                      </div>

                      <ul
                        style={{
                          color: "#000000",
                          fontWeight: 700,
                          fontSize: "20px",
                        }}
                      >
                        <li>Easiness of online/offline consultation</li>
                        <li>Experienced family lawyer</li>
                        <li>Personalized solutions</li>
                        <li>Compassionate support</li>
                        <li>Transparency between us and you</li>
                        <li>Stand a step ahead to protect your rights</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services End */}

          {/* Appointment Start */}
          <Appointment />
          {/* Appointment End */}

          {/* Team Start */}
          <div className="container-fluid py-5">
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-3">
                  <h1 className="mb-4">Meet Our Team</h1>
                </div>
                <div className="col-lg-9 pt-5 pt-lg-0">
                  <div
                    className="rounded"
                    style={{ height: "200px", backgroundColor: "#bf5324" }}
                  ></div>
                  <div
                    className="owl-carousel team-carousel position-relative"
                    style={{ marginTop: "-100px", padding: "0 30px" }}
                  >
                    <div className="team d-flex flex-column text-center rounded overflow-hidden">
                      <div className="position-relative">
                        <div className="team-img">
                          <img
                            className=" w-75  object-fit-cover"
                            src="img/mohd-yusuf.jpeg"
                            alt="mohd-yusuf"
                          />
                        </div>
                      </div>
                      <div
                        className="d-flex flex-column  text-center py-4"
                        style={{ backgroundColor: "#bf5324" }}
                      >
                        <h5 style={{ color: "#f5d9b5" }}>Mohd Yusuf</h5>
                        <p className="m-0 text-white">Advocate</p>
                      </div>
                    </div>
                    <div className="team d-flex flex-column text-center rounded overflow-hidden">
                      <div className="position-relative">
                        <div className="team-img">
                          <img
                            className="w-75"
                            src="img/mohd-shakeel.jpeg"
                            alt="mohd-shakeel"
                          />
                        </div>
                      </div>
                      <div
                        className="d-flex flex-column  text-center py-4"
                        style={{ backgroundColor: "#bf5324" }}
                      >
                        <h5 style={{ color: "#f5d9b5" }}>Mohd Shakeel</h5>
                        <p className="m-0 text-white">Legal Consultant</p>
                      </div>
                    </div>
                    <div className="team d-flex flex-column text-center rounded overflow-hidden">
                      <div className="position-relative">
                        <div className="team-img">
                          <img
                            className="w-75"
                            src="img/nitin-bhaskar.jpeg"
                            alt="nitin-bhaskar"
                          />
                        </div>
                      </div>
                      <div
                        className="d-flex flex-column  text-center py-4"
                        style={{ backgroundColor: "#bf5324" }}
                      >
                        <h5 style={{ color: "#f5d9b5" }}>Nitin Bhaskar</h5>
                        <p className="m-0 text-white">Advocate</p>
                      </div>
                    </div>
                  </div>
                </div>
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
