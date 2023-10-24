import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div class="navbar">
        <a class="logo" href="#">
          <img src="../assets/logo-ilab.png" alt="" />
        </a>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
        <div class="buttons">
          <button id="signup">Sign Up</button>
          <button id="login">Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
