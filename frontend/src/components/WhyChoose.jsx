import React from "react";

const WhyChoose = () => {
  return (
    <div
      className="owl-carousel service-carousel position-relative"
      style={{ marginTop: "-100px", padding: "0 30px" }}
    >
      <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
        <div
          className="icon-box  text-primary mt-2 mb-4"
          style={{ backgroundColor: "#919191" }}
        >
          <i className="fa fa-2x fa-users" style={{ color: "#fff" }}></i>
        </div>

        <ul
          className="custom-font-size"
          style={{
            color: "#000000",
            fontWeight: 700,

            textAlign: "left",
          }}
        >
          <li>Easiness of online/offline consultation</li>
          <li>Experienced family lawyer</li>
          <li>Personalized solutions</li>
          <li>Compassionate support</li>
          <li>Transparency between us and you</li>
          <li>Stand a step ahead to protect your rights</li>
        </ul>
      </div>
    </div>
  );
};

export default WhyChoose;
