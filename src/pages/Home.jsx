import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
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
                src="img/carousel-1.jpg"
                style={{ objectFit: "cover" }}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h3 className="display-2 text-capitalize text-white mb-4">
                    Our fighting Is for your justice
                  </h3>
                  <a className="btn btn-primary py-3 px-5 mt-2" href="#">
                    Get An Appointment
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
          <a
            className="carousel-control-prev"
            href="#header-carousel"
            data-slide="prev"
          >
            <div className="btn btn-lg btn-secondary btn-lg-square">
              <span className="carousel-control-prev-icon"></span>
            </div>
          </a>
          <a
            className="carousel-control-next"
            href="#header-carousel"
            data-slide="next"
          >
            <div className="btn btn-lg btn-secondary btn-lg-square">
              <span className="carousel-control-next-icon"></span>
            </div>
          </a>
        </div>
      </div>
      {/* Carousel End */}

      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-5">
              <img className="img-fluid rounded" src="img/about.jpg" alt="" />
            </div>
            <div className="col-lg-7 mt-4 mt-lg-0">
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
      {/* About End */}

      {/* Services Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3">
              <h1 className="mb-4">Our Expertise</h1>
              <p>
                Invidunt lorem justo clita. Erat lorem labore ea, justo dolor
                lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat
                justo sed sed diam. Ea et erat ut sed diam sea ipsum
              </p>
            </div>
            <div className="col-lg-9 pt-5 pt-lg-0">
              <div
                className="bg-primary rounded"
                style={{ height: "200px" }}
              ></div>
              <div
                className="owl-carousel service-carousel position-relative"
                style={{ marginTop: "-100px", padding: "0 30px" }}
              >
                <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                  <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                    <i className="fa fa-2x fa-users"></i>
                  </div>
                  <h5 className="mb-4 px-4">Family Law</h5>
                  <p className="m-0">
                    Takim stet justo elitr sea eirmod vero ipsum. Sed Stet clita
                    sit duo dolor stet at at. Tempor dolor sit ipsum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}

      {/* Appointment Start */}
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
                      <textarea
                        className="form-control border-0 p-4"
                        rows="3"
                        placeholder="Message"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button
                        className="btn btn-primary btn-block py-3"
                        type="submit"
                      >
                        Get An Appointment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block h-100">
                <h1 className="display-3 text-white">
                  Our fight is for your justice
                </h1>
                <h1 className="display-3 text-white">
                  We prepared to oppose for you
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment End */}

      {/* Team Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3">
              <h1 className="mb-4">Meet Our Attorney</h1>
              <p>
                Invidunt lorem justo clita. Erat lorem labore ea, justo dolor
                lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat
                justo sed sed diam. Ea et erat ut sed diam sea ipsum
              </p>
            </div>
            <div className="col-lg-9 pt-5 pt-lg-0">
              <div
                className="bg-primary rounded"
                style={{ height: "200px" }}
              ></div>
              <div
                className="owl-carousel team-carousel position-relative"
                style={{ marginTop: "-100px", padding: "0 30px" }}
              >
                <div className="team d-flex flex-column text-center rounded overflow-hidden">
                  <div className="position-relative">
                    <div className="team-img">
                      <img
                        className="img-fluid w-100"
                        src="img/team-1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column bg-secondary text-center py-4">
                    <h5 className="text-white">Lawyer Name</h5>
                    <p className="m-0">Civil Lawyer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
      <Footer />
      {/* <!-- Footer End --> */}

      {/* <!-- JavaScript Libraries --> */}
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
      <script src="lib/easing/easing.min.js"></script>
      <script src="lib/waypoints/waypoints.min.js"></script>
      <script src="lib/owlcarousel/owl.carousel.min.js"></script>
      <script src="lib/tempusdominus/js/moment.min.js"></script>
      <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
      <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

      {/* <!-- Contact Javascript File --> */}
      <script src="mail/jqBootstrapValidation.min.js"></script>
      <script src="mail/contact.js"></script>

      {/* <!-- Template Javascript --> */}
      <script src="js/main.js"></script>
    </div>
  );
};

export default Home;
