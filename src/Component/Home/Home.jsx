import React, { useEffect } from "react";
import "./home.css";
import video from "../../Assets/video.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";
import { LuListFilter } from "react-icons/lu";
import { TbApps } from "react-icons/tb";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    
  }, []);


  

  return (
    <section className="home">
      <div className="overlay" />
      <video
        className="video"
        src={video}
        muted
        autoPlay
        loop
        type="video/mp4"
      />
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search your Holiday
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv  grid">
          <div className="destinationInput">
            <label className="label" htmlFor="city">
              Search Your Destination
            </label>
            <div className="input flex">
              <input
                className="inputTitle"
                type="text"
                placeholder="Enter name here....."
              />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="dateInput">
            <label className="label" htmlFor="date">
              Select Your date:
            </label>
            <div className="input flex">
              <input
                className="inputTitle"
                type="date"
                placeholder="Enter name here....."
              />
            </div>
          </div>
          <div className="priceInput">
            <div className="lebel_total flex">
              <label className="label" htmlFor="price">
                Max price{" "}
              </label>
              <h3 className="total">$3000</h3>
            </div>
            <div className="input flex">
              <input
                className="inputTitle"
                type="range"
                max="3000"
                min="1000"
              />
            </div>
          </div>

          <div className="searchOptions flex ">
            <HiFilter className="icon" />
            <span className="span">MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcins flex">
          <div className="rightIcons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <SiTripadvisor className="icon" />
          </div>
          <div className="leftgIcons">
            <LuListFilter className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Home;
