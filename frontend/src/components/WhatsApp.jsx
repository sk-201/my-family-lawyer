import React from "react";
import { Link } from "react-router-dom";

const WhatsApp = () => {
  const PHONE = "+919868333896";
  const TEXT = "Hello I want to take an appointment!";
  return (
    <Link to={`https://wa.me/${PHONE}?text=${encodeURIComponent(TEXT)}`}>
      <div
        className="icon-box bg-success"
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          zIndex: 1000, // Ensures the icon stays on top of other content
        }}
      >
        <i
          className="fab fa-4x fa-whatsapp"
          style={{
            color: "#fff",
            cursor: "pointer",
          }}
        ></i>
      </div>
    </Link>
  );
};

export default WhatsApp;
