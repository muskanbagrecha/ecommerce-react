import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CarouselList from "./CarouselList";
import "./Carousel.css";
import { LeftArrow, RightArrow } from "../../../Assets/Icons/icons";

const Carousel = ({ brandData }) => {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    currentIndex === brandData.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    currentIndex === 0
      ? setCurrentIndex(brandData.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="carousel">
      <LeftArrow className="arrow arrow--left" onClick={prevSlide} />
      <CarouselList data={brandData} currentIndex={currentIndex} />
      <RightArrow className="arrow arrow--right" onClick={nextSlide} />
    </section>
  );
};

export default Carousel;
