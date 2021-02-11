import React from "react";
import "./style.css"
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

      <NavLink to="/login"
      style={{ 
        cursor: "pointer", 
        fontSize: "20px",
        color: "white",
        paddingRight: "8px"
      }}
      activeStyle={{
        fontWeight: "bold",
        color: "black"
      }}> Login
      </NavLink>

      <NavLink to="/testimonials"
      style={{ 
        cursor: "pointer", 
        fontSize: "20px",
        color: "white",
        paddingRight: "8px"
      }}
      activeStyle={{
        fontWeight: "bold",
        color: "black",
        paddingRight: "5px"
      }}> Testimonial
      </NavLink>

      <NavLink to="/goals"
      style={{ 
        cursor: "pointer", 
        fontSize: "20px",
        color: "white",
        paddingRight: "8px"

      }}
      activeStyle={{
        fontWeight: "bold",
        color: "black",
      }}> Goals
      </NavLink>


    </nav>
  );
}

export default NavBar;