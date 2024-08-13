import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        className="container-fluid  text-white pt-5 px-sm-3 px-md-5"
        style={{ marginTop: "90px", backgroundColor: "#bf5324" }}
      >
        <div className="row mt-5">
          <div className="col-lg-4">
            <div
              className="d-flex justify-content-lg-center p-4"
              style={{ background: "rgba(256, 256, 256, .05)" }}
            >
              <i
                className="fa fa-2x fa-map-marker-alt "
                style={{ color: "#f5d9b5" }}
              ></i>
              <div className="ml-3">
                <h5 className="text-white">Our Office</h5>
                <p className="m-0">
                  BGS Block, B 53 Tis hazari Court <br /> Delhi -110054
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="d-flex justify-content-lg-center p-4"
              style={{ background: "rgba(256, 256, 256, .05)" }}
            >
              <i
                className="fa fa-2x fa-envelope-open "
                style={{ color: "#f5d9b5" }}
              ></i>
              <div className="ml-3">
                <h5 className="text-white">Email Us</h5>
                <p className="m-0">myfamilylawyer01@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="d-flex justify-content-lg-center p-4"
              style={{ background: "rgba(256, 256, 256, .05)" }}
            >
              <i
                className="fa fa-2x fa-phone-alt "
                style={{ color: "#f5d9b5" }}
              ></i>
              <div className="ml-3">
                <h5 className="text-white">Call Us</h5>
                <p className="m-0">+91-9868333896</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg-4 col-md-6 mb-5">
            <a href="index.html" className="navbar-brand">
              <h1
                className="m-0 mt-n2 display-4  text-uppercase"
                style={{ color: "#f5d9b5" }}
              >
                Justice
              </h1>
            </a>
            <p>
              Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem
              lorem sit sed elitr sed kasd et
            </p>
            <div className="d-flex justify-content-start mt-4">
              <a
                className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                href="#"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                href="https://www.facebook.com/profile.php?id=100093380696586"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                href="#"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-lg btn-outline-light btn-lg-square"
                href="#"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <h4
              className="font-weight-semi-bold  mb-4 text-center"
              style={{ color: "#f5d9b5" }}
            >
              Popular Links
            </h4>
            <div className="d-flex flex-column justify-content-start text-center">
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Home
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>About
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Services
              </a>

              <a className="text-white" href="#">
                <i className="fa fa-angle-right mr-2"></i>Contact
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5 text-center ">
            <h4
              className="font-weight-semi-bold  mb-4 "
              style={{ color: "#f5d9b5" }}
            >
              Quick Links
            </h4>
            <div className="d-flex flex-column justify-content-start text-center ">
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>FAQs
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Help
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Terms
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Privacy
              </a>
              <a className="text-white" href="#">
                <i className="fa fa-angle-right mr-2"></i>Site Map
              </a>
            </div>
          </div>
        </div>
        <div
          className="row p-4 mt-5 mx-0"
          style={{ background: "rgba(256, 256, 256, .05)" }}
        >
          <div className="text-center  mb-3 mb-md-0 " style={{ width: "100%" }}>
            <p className="m-0 text-white ">
              &copy;{" "}
              <a className="font-weight-bold" href="#">
                Copyright © 2024
              </a>
              . All rights reserved by The Family Lawyer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
