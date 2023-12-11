/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "./footer.css";
import video from "../../Assets/video2.mp4";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaChevronRight
} from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";
import Aos from "aos";
import 'aos/dist/aos.css'

const Footer = () => {


  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <section className="footer">
      <div className="videoDiv">
        <video
          className="video"
          src={video}
          loop
          autoPlay
          muted
          type="video/mp4"
        />
      </div>

      <div className="secContent container">
        <div data-aos="fade-up" className="contactDiv flex">
          <div className="text">
            <small className="small">KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND<FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                {" "}<MdTravelExplore className="icon" /> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias tenetur quidem nemo aspernatur modi ullam, voluptate nam
              assumenda fuga impedit aliquid suscipit hic culpa, aliquam ut
              minima. Consectetur, cum totam!
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
              <FaInstagram className="icon" />
              <SiTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* group one */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Payment
              </li>
            </div>

            {/* group two */}

            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">PARTNER</span>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Bookings
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>

            {/* group Three */}

            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                London
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Bangladesh
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Pakistan
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Brazil
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                India
              </li>
            </div>
          </div>

          <div  className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPY RIGHT RESERVED - 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
