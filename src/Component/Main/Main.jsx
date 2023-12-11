import React from "react";
import "./main.css";
import { Data } from "../../data";
import { HiLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destination{" "}
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, image, desTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img className="img" src={image} alt={desTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">
                    {desTitle}
                  </h4>
                  <span className="content flex">
                    <HiLocationMarker className="icon" />
                    <span className="name">
                      {location}
                    </span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small className="small">+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>
                        {fees}
                      </h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>
                      {description}
                    </p>
                  </div>

                  <button className="btn flex">
                    DETAILS <LuClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
