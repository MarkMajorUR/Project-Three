import React from "react";
import "./style.css"
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink to="/testimonials"
      style={{ 
        cursor: "pointer", 
        fontSize: "20px",
        color: "white"
      }}
      activeStyle={{
        fontWeight: "bold",
        color: "black"
      }}> Testimonial
      </NavLink>

      <NavLink to="/goals"
      style={{ 
        cursor: "pointer", 
        fontSize: "20px",
        color: "white"
      }}
      activeStyle={{
        fontWeight: "bold",
        color: "black"
      }}> Goals
      </NavLink>


      <NavLink to="/signup"
      style={{ 
        cursor: "pointer", 
        fontSize: "20px",
        color: "white"
      }}
      activeStyle={{
        fontWeight: "bold",
        color: "black"
      }}> signup
      </NavLink>
      
    </nav>
  );
}

export default NavBar;