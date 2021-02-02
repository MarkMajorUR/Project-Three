import React from "react";
import NavLink  from "../Navlink";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink to="/testimonials" activeStyle={{
      fontWeight: "bold",
      color: "blue"}}>
        Testimonials
      </NavLink>
      <NavLink to="/goal" activeStyle={{
      fontWeight: "bold",
      color: "red"}}>
        Goals
      </NavLink>
      <NavLink to="/signup" activeStyle={{
      fontWeight: "bold",
      color: "red" }}>
        signup
      </NavLink>
    </nav>
  );
}

export default NavBar;