/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { MdTravelExplore } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavabr");
  };

  const removeNav = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              {" "}<MdTravelExplore className="icon" />Travel
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="mavLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="mavLink">
                Packages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="mavLink">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="mavLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="mavLink">
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="mavLink">
                News
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="mavLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="#">Book Now</a>
            </button>
          </ul>

          <div onClick={removeNav} className="closeNavber">
            <IoCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <PiDotsThreeOutlineFill className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
