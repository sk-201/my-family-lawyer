import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="text-primary text-uppercase mb-4">Get In Touch</h5>
            <p>
              <i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York,
              USA
            </p>
            <p>
              <i className="fa fa-phone-alt mr-2"></i>+012 345 67890
            </p>
            <p>
              <i className="fa fa-envelope mr-2"></i>info@example.com
            </p>
            <div className="d-flex justify-content-start mt-4">
              <a className="btn btn-outline-light btn-square mr-2" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-outline-light btn-square mr-2" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-square mr-2" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="btn btn-outline-light btn-square" href="">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="text-primary text-uppercase mb-4">Our Services</h5>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white mb-2" href="">
                <i className="fa fa-angle-right mr-2"></i>Service 1
              </a>
              <a className="text-white mb-2" href="">
                <i className="fa fa-angle-right mr-2"></i>Service 2
              </a>
              <a className="text-white mb-2" href="">
                <i className="fa fa-angle-right mr-2"></i>Service 3
              </a>
              <a className="text-white mb-2" href="">
                <i className="fa fa-angle-right mr-2"></i>Service 4
              </a>
              <a className="text-white mb-2" href="">
                <i className="fa fa-angle-right mr-2"></i>Service 5
              </a>
              <a className="text-white" href="">
                <i className="fa fa-angle-right mr-2"></i>Service 6
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="text-primary text-uppercase mb-4">Quick Links</h5>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white mb-2" href="">
                <i className="fa fa-angle-right mr-2"></i>Privacy Policy
              </a>
              <a className="text-white mb-2" href="">
                <i className="fa fa-angle-right mr-2"></i>Terms & Condition
              </a>
              <a className="text-white mb-2" href="">
                <i className="fa fa-angle-right mr-2"></i>Disclaimer
              </a>
              <a className="text-white mb-2" href="">
                <i className="fa fa-angle-right mr-2"></i>Contact
              </a>
              <a className="text-white mb-2" href="">
                <i className="fa fa-angle-right mr-2"></i>FAQ
              </a>
              <a className="text-white" href="">
                <i className="fa fa-angle-right mr-2"></i>Help
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="text-primary text-uppercase mb-4">Newsletter</h5>
            <p>
              Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
              stet duo justo
            </p>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-light"
                  style={{ padding: "30px" }}
                  placeholder="Your Email Address"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid pt-5"
          style={{ borderTop: "1px solid rgba(255, 255, 255, .1)" }}
        >
          <p className="m-0 text-center text-white">
            &copy;{" "}
            <a className="text-primary font-weight-bold" href="#">
              Your Site Name
            </a>
            . All Rights Reserved. Designed by
            <a
              className="text-primary font-weight-bold"
              href="https://htmlcodex.com"
            >
              HTML Codex
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
