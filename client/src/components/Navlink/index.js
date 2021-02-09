import React from "react";

function NavLink() {
  return (
    <div>
      <a className="navbar-brand" to="../Goals">Goal</a>
      <a className="navbar-brand" to="/">Testimonial</a>
      <a className="navbar-brand" to="/">sign in</a>
    </div>
  );
}

export default NavLink;