import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
const Marriage = () => {
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
            <h3 className="display-3 text-white text-uppercase">Marriage</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase">
                <a className="text-white" href="/">
                  Home
                </a>
              </p>
              <i className="fa fa-angle-double-right pt-1 px-3"></i>
              <p className="m-0 text-uppercase">Marriage</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Marriage Start --> */}

      <div className="container-fluid py-5 text-center">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-12 mt-4 mt-lg-0">
              <h1 className="mb-4">
                We Provide Reliable And Effective Family Law Services
              </h1>
              <p
                className=" p-5 rounded custom-font-size  "
                style={{
                  color: "#ffffff",
                  fontWeight: 700,

                  border: "1px solid #919191",
                  backgroundColor: "#524f4f",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
                }}
              >
                <div>
                  <img
                    src="img/logo.jpg"
                    className="rounded-circle mb-2"
                    style={{ width: "120px" }}
                    alt="Avatar"
                  />
                </div>
                Marriage is a significant milestone, symbolizing love,
                commitment, and partnership. While it's a joyous occasion, it's
                also essential to consider the legal implications. Marriage is a
                legal union that carries significant rights and
                responsibilities. My family lawyer guides you through
                Pre-nuptial agreements Marital contracts Domestic partnerships
                My Family lawyer understand the importance of this milestone and
                are dedicated to ensuring your legal interests are protected.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Marriage End --> */}

      {/* <!-- Footer  --> */}
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default Marriage;
