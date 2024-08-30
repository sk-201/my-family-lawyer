import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
const ChildCustody = () => {
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
              Child Custody
            </h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase">
                <a className="text-white" href="/">
                  Home
                </a>
              </p>
              <i className="fa fa-angle-double-right pt-1 px-3"></i>
              <p className="m-0 text-uppercase">Child Custody</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- ChildCustody Start --> */}

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
                    src="img/about.jpg"
                    className="rounded-circle mb-2"
                    style={{ width: "120px" }}
                    alt="Avatar"
                  />
                </div>
                At My Family Lawyer, we are dedicated to providing peace of mind
                through our extensive expertise in family law. Our commitment is
                to assist individuals and families in navigating the
                complexities of legal challenges, whether through court trials,
                mediation, or amicable settlements. With a deep understanding of
                family laws and their implications, we are here to offer
                comprehensive legal support tailored to your unique situation.
                Our approach is client-focused, ensuring that we not only
                address the legal aspects of your case but also provide
                compassionate support throughout the process. We believe in
                transparent communication and personalized solutions that
                prioritize your rights and well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ChildCustody End --> */}

      {/* <!-- Footer  --> */}
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default ChildCustody;
