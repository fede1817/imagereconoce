import React from "react";

function Navigation({ setLogin }) {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p
        className="f3 link dim white underline pa2 pointer"
        onClick={() => setLogin("login")}
      >
        Sing In
      </p>
    </nav>
  );
}

export default Navigation;
