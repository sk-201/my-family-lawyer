import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
const Maintenance = () => {
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
              Maintenance{" "}
            </h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase">
                <a className="text-white" href="/">
                  Home
                </a>
              </p>
              <i className="fa fa-angle-double-right pt-1 px-3"></i>
              <p className="m-0 text-uppercase">Maintenance</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Maintenance Start --> */}

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
                Maintenance is a legal provision designed to provide financial
                assistance/support to those in need. Spouses, children, and even
                parents can seek maintenance under certain circumstances.
                Understanding your maintenance rights is crucial. My family
                lawyer can help you understand your rights and obligations
                regarding maintenance. Whether you're seeking maintenance or
                defending against a claim, we can provide expert guidance
                through this complex process. • Spousal Maintenance: Aims to
                ensure financial stability for a spouse after separation or
                divorce. • Child Maintenance: Guarantees financial support for
                children, essential for their upbringing and well-being. •
                Parental Maintenance: In specific cases, parents may be entitled
                to maintenance from their adult children, often under conditions
                of dependency or incapacity. Understanding your maintenance
                rights is crucial. Our legal experts can guide you through the
                process.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Maintenance End --> */}

      {/* <!-- Footer  --> */}
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default Maintenance;
