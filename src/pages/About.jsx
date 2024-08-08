import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const About = () => {
  return (
    <div>
      {/* <!-- Header Start --> */}
      <Header />

      {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid bg-page-header"
        style={{ marginBottom: "90px" }}
      >
        <div className="container">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "400px" }}
          >
            <h3 className="display-3 text-white text-uppercase">About</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase">
                <a className="text-white" href="">
                  Home
                </a>
              </p>
              <i className="fa fa-angle-double-right pt-1 px-3"></i>
              <p className="m-0 text-uppercase">About</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- About Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-5">
              <img className="img-fluid rounded" src="./img/about.jpg" alt="" />
            </div>
            <div className="col-lg-7 mt-4 mt-lg-0">
              <h2
                className="position-relative text-center bg-white text-primary rounded p-3 mt-4 mb-4 d-none d-lg-block"
                style={{ width: "350px", marginLeft: "-205px" }}
              >
                25 Years Experience
              </h2>
              <h6 className="text-uppercase">Learn About Us</h6>
              <h1 className="mb-4">
                We Provide Reliable And Effective Legal Services
              </h1>
              <p>
                Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
                dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
                Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                dolor
              </p>
              <a href="" className="btn btn-primary mt-2">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Appointment Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="bg-appointment rounded">
            <div className="row h-100 align-items-center justify-content-center">
              <div className="col-lg-6 py-5">
                <div
                  className="rounded p-5 my-5"
                  style={{ background: "rgba(55, 55, 63, .7)" }}
                >
                  <h1 className="text-center text-white mb-4">
                    Get An Appointment
                  </h1>
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control border-0 p-4"
                        placeholder="Your Name"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control border-0 p-4"
                        placeholder="Your Email"
                        required="required"
                      />
                    </div>
                    <div className="form-row">
                      <div className="col-6">
                        <div className="form-group">
                          <div
                            className="date"
                            id="date"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              className="form-control border-0 p-4 datetimepicker-input"
                              placeholder="Select Date"
                              data-target="#date"
                              data-toggle="datetimepicker"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <div
                            className="time"
                            id="time"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              className="form-control border-0 p-4 datetimepicker-input"
                              placeholder="Select Time"
                              data-target="#time"
                              data-toggle="datetimepicker"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <select
                        className="custom-select border-0 px-4"
                        style={{ height: "47px" }}
                      >
                        <option selected>Select A Service</option>
                        <option value="1">Service 1</option>
                        <option value="2">Service 2</option>
                        <option value="3">Service 3</option>
                      </select>
                    </div>
                    <div>
                      <button
                        className="btn btn-primary btn-block border-0 py-3"
                        type="submit"
                      >
                        Get An Appointment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <h1 className="text-white text-uppercase">
                  25 Years Experience
                </h1>
                <h1 className="text-white text-uppercase">Winning Law Firm</h1>
                <h1 className="text-white text-uppercase">
                  Master Of Law &amp; Cases
                </h1>
                <a href="" className="btn btn-primary mt-3">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Appointment End --> */}

      {/* <!-- Footer  --> */}
      <Footer />
    </div>
  );
};

export default About;
