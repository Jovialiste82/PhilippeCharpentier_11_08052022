import React, { useState, useEffect } from "react";
import "./carousel.css";

const Carousel = ({ pictures }) => {
  console.log(pictures);

  const [gallery, setGallery] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setGallery(pictures);
  }, [pictures, gallery]);

  const handleLeftBtn = () => {
    activeIndex === 0
      ? setActiveIndex(gallery.length - 1)
      : setActiveIndex(activeIndex - 1);
  };

  const handleRightBtn = () => {
    activeIndex === gallery.length - 1
      ? setActiveIndex(0)
      : setActiveIndex(activeIndex + 1);
  };

  return (
    <div className='accomodation-banner'>
      <span
        className='carousel-btn carousel-btn-left'
        onClick={handleLeftBtn}
      ></span>
      <img src={gallery[activeIndex]} alt='' />
      <span
        className='carousel-btn carousel-btn-right'
        onClick={handleRightBtn}
      ></span>
      <span className='carousel-slide-indicator'>
        {activeIndex + 1}/{gallery.length}
      </span>
    </div>
  );
};

export default Carousel;
