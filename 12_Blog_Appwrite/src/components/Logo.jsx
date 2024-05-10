import React from "react";
import logoImage from '../assets/logo.jpg';

function Logo({ width = "100px" }) {
  return (
    <>
      <div>
        <img src={logoImage} alt="Logo" style={{ width: width }} />
      </div>
    </>
  );
}

export default Logo;
