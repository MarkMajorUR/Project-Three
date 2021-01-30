import React from "react";
import NavLink  from "../Navlink";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink to="/testimonials" activeStyle={{
      fontWeight: "bold",
      color: "blue"}}>
      