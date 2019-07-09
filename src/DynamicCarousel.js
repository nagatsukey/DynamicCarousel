import React, { useState } from "react";
import "./DynamicCarousel.css";

export default React.memo(
  ({ initialSlide = 0, children = [], infinite = false }) => {
    const [slide, setSlide] = useState(initialSlide);
    const slideleStyle = index => {
      return {
        marginLeft: `${-100 * slide + 100 * index}%`
      };
    };
    const slides = children.map((content, index) => {
      return (
        <article
          className="Slide"
          style={slideleStyle(index)}
          key={`slide${index}`}
        >
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
      <React.Fragment>
        <div className="Block">{slides}</div>

        <div className="SliderControl">
          <button className="ButtonPrev" onClick={onClickPrev} />
          <button className="ButtonNext" onClick={onClickNext} />
        </div>
      </React.Fragment>
    );
  },
  (prevProps, nextProps) =>
    prevProps.slideIndex === nextProps.slideIndex &&
    prevProps.children === nextProps.slideIndex
);
