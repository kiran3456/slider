import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const Length = slides.length;

  const nextSlide = () => {
    setCurrent(current === Length - 1 ? 0 : current + 1);
    //console.log(Length, current);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? Length - 1 : current - 1);
    //console.log(Length, current);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="react images" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
