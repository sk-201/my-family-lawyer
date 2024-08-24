import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

const Contact = () => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneno] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async () => {
    let dataSend = {
      name: name,
      phoneNo: phoneNo,
      subject: subject,
      message: message,
    };
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/email/sendEmail`,
        {
          method: "POST",
          body: JSON.stringify(dataSend),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      {/* <!-- Header  --> */}
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
            <h3 className="display-3 text-white text-uppercase">Contact</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase">
                <a className="text-white" href="">
                  Home
                </a>
              </p>
              <i className="fa fa-angle-double-right pt-1 px-3"></i>
              <p className="m-0 text-uppercase">Contact</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}
      {/* <!-- Contact Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center pb-2">
            <h6 className="text-uppercase">Contact Us</h6>
            <h1 className="mb-4">Contact For Any Query</h1>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="contact-form">
                <div id="success"></div>
                <form
                  name="sentMessage"
                  id="contactForm"
                  novalidate="novalidate"
                >
                  <div className="form-row">
                    <div className="col-sm-6 control-group">
                      <input
                        type="text"
                        className="form-control p-4"
                        id="name"
                        placeholder="Your Name"
                        required="required"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        data-validation-required-message="Please enter your name"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="col-sm-6 control-group">
                      <input
                        type="number"
                        className="form-control p-4"
                        id="phone"
                        placeholder="Your Phone"
                        required="required"
                        onChange={(e) => setPhoneno(e.target.value)}
                        value={phoneNo}
                        data-validation-required-message="Please enter your Phone no"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="subject"
                      placeholder="Subject"
                      required="required"
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                      data-validation-required-message="Please enter a subject"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control p-4"
                      rows="6"
                      id="message"
                      placeholder="Message"
                      required="required"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      data-validation-required-message="Please enter your message"
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary btn-block"
                      type="submit"
                      id="sendMessageButton"
                      onClick={sendEmail}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6" style={{ minHeight: "400px;" }}>
              <div className="position-relative h-100 rounded overflow-hidden">
                <iframe
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    border: "0",
                  }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.802971609248!2d77.21452157429496!3d28.665617582579625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0b2e5426ad%3A0x9327b697e6d25f47!2sDistrict%20%26%20Sessions%20Courts%2C%20Tis%20Hazari!5e0!3m2!1sen!2sin!4v1723711721855!5m2!1sen!2sin"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatsApp />
      {/* <!-- Contact End --> */}
      {/* <!-- Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
