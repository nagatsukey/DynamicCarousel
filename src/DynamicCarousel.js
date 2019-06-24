import React, { useState } from "react";
import "./DynamicCarousel.css";

export default React.memo(
  ({ initialSlide = 0, children = [], infinite = false }) => {
    const [slide, setSlide] = useState(initialSlide);
    const innerStyle = {
      marginLeft: `${slide * -100}%`,
      width: `${children.length * 100}%`
    };
    const articleStyle = {
      width: `${100 / children.length}%`
    };
    const slides = children.map((content, index) => {
      return (
        <article style={articleStyle} key={`slide${index}`}>
          {content}
        </article>
      );
    });
    const updateSlide = num => {
      let nextSlide = slide + num;
      if (infinite) {
        nextSlide = nextSlide < 0 ? children.length - 1 : nextSlide;
        nextSlide = nextSlide >= children.length ? 0 : nextSlide;
      } else {
        nextSlide = nextSlide < 0 ? 0 : nextSlide;
        nextSlide =
          nextSlide >= children.length ? children.length - 1 : nextSlide;
      }
      setSlide(nextSlide);
    };
    const onClickPrev = () => {
      updateSlide(-1);
    };
    const onClickNext = () => {
      updateSlide(1);
    };
    return (
      <div className="wrapper">
        <div className="slider-wrapper">
          <div className="inner" style={innerStyle}>
            {slides}
          </div>
        </div>

        <div className="slider-prev-next-control">
          <button className="button--prev" onClick={onClickPrev} />
          <button className="button--next" onClick={onClickNext} />
        </div>
      </div>
    );
  },
  (prevProps, nextProps) =>
    prevProps.slideIndex === nextProps.slideIndex &&
    prevProps.children === nextProps.slideIndex
);
