import React from "react";
import "../css/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="navbar navbar_land">
      <div class="navland_container">
        <div class="navland_link">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        </div>
        <form class="d-flex">
          <button class="btn btn-primary nav_landbtn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </nav>
  );
};
export default Nav;
