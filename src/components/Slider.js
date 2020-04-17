import React from "react";
import { Slide } from "react-slideshow-image";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";
import "./slider.css";

const slideImages = [p1, p2, p3];

const properties = {
  duration: 3000,
  transitionDuration: 300,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const Slider = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slider;
