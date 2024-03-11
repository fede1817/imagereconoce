import React from "react";
import Tilt from "react-parallax-tilt";
import sonrisa from "./sonrisa.png";
function Logo() {
  return (
    <div className="ma4 mt0 w-10">
      <Tilt className="w-20">
        <div
          className="br2 shadow-2"
          style={{
            height: "200px",
            width: "200px",
            background: "linear-gradient(89deg, #ff5edf 0%, #04c8de 100%)",
          }}
        >
          <div className="pa3">
            <img src={sonrisa} alt="Users" />
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
