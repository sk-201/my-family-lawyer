import React from "react";

const Appointment = () => {
  return (
    <div>
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
                    Get an appointment
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
                        Get an appointment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block h-100">
                <h1 className="display-3 text-white">
                  We provide Comprehensive services in the matters relating to
                  Family
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
