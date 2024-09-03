import React from "react";
import FloatingLogo from "../images/walogo.png";
import "./whatsapp.css";

const Whatsapp = () => {
  return (
    <div className="FloatingLogo-container">
      <a href="https://wa.me/7250412245" target="blank">
        <img
          src={FloatingLogo}
          alt="FloatingLogo"
          className="FloatingLogo"
          height="100vh"
        />
      </a>
      <div className="FloatingLogo-text">
        <p>click to chat</p>
      </div>
    </div>
  );
};

export default Whatsapp;
