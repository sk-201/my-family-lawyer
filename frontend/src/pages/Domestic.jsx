import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
const Domestic = () => {
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
            <h3 className="display-3 text-white text-uppercase">
              Domestic Violence
            </h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase">
                <a className="text-white" href="/">
                  Home
                </a>
              </p>
              <i className="fa fa-angle-double-right pt-1 px-3"></i>
              <p className="m-0 text-uppercase">Domestic Violence</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Domestic Start --> */}

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
                Domestic Violence is a serious crime that affects people from
                all walks of life. It's a pattern of abusive behaviour used to
                gain or maintain power and control over an intimate partner.
                This harmful behaviour can include physical, emotional, sexual,
                and economic abuse. If you or someone you know is experiencing
                physical, emotional or psychological abuse, you are not alone.
                The Domestic Violence Act, intended to protect victims, is
                increasingly being misused as a tool for harassment and
                coercion. False allegations can ruin lives, damage reputations,
                and create financial hardship. It's imperative to ensure that
                the law is used fairly and justly, protecting both victims and
                the accused. My family lawyer is dedicated to protecting the
                rights of victims and accused of domestic violence. We
                understand the fear and confusion you may be feeling, don’t
                suffer in silence we are here to help.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Domestic End --> */}

      {/* <!-- Footer  --> */}
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default Domestic;
