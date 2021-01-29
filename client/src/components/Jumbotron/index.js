import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 100, clear: "both", paddingTop: 20, textAlign: "center", backgroundColor: "#fff" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
