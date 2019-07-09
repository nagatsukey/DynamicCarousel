import React, { useState } from "react";
import "./DynamicCarousel.css";

export const SLIDE_ACTION = {
  NOMAL: "NOMAL",
  PREVING: "PREVING",
  NEXTING: "NEXTING"
};

export default React.memo(
  ({
    // initialSlide = 1,
    children = [],
    afterChange = () => {},
    isEnd = false,
    isStart = false
  }) => {
    const [slideState, setSlideState] = useState(SLIDE_ACTION.NOMAL);
    const slideleStyle = index => {
      const standardMargin = -100 + index * 100;
      let slidingMargin = 0;
      if (slideState === SLIDE_ACTION.PREVING) {
        slidingMargin = 100;
      } else if (slideState === SLIDE_ACTION.NEXTING) {
        slidingMargin = -100;
      }
      const startMargin = isStart ? 100 : 0;
      return {
        marginLeft: `${standardMargin + slidingMargin + startMargin}%`
      };
    };
    const slides = children.map((content, index) => {
      return (
        <article
          className="Slide"
          style={slideleStyle(index)}
          key={`slide_${content.key}`}
          onTransitionEnd={() => {
            // 1つ目のスライドにだけtransition終了時のイベントを追加
            if (index === 0) {
              afterChange(slideState);
              setSlideState(SLIDE_ACTION.NOMAL);
            }
          }}
        >
          {content}
        </article>
      );
    });
    const onClickPrev = () => {
      setSlideState(SLIDE_ACTION.PREVING);
    };
    const onClickNext = () => {
      setSlideState(SLIDE_ACTION.NEXTING);
    };
    const isSliding =
      slideState === SLIDE_ACTION.PREVING ||
      slideState === SLIDE_ACTION.NEXTING;
    return (
      <React.Fragment>
        <div className="Block">{slides}</div>
        <div className="SliderControl">
          {isStart ? null : (
            <button
              className="ButtonPrev"
              onClick={onClickPrev}
              disabled={isSliding}
              style={isStart ? { visibility: true } : null}
            />
          )}
          {isEnd ? null : (
            <button
              className="ButtonNext"
              onClick={onClickNext}
              disabled={isSliding || isEnd}
              style={isEnd ? { visibility: true } : null}
            />
          )}
        </div>
      </React.Fragment>
    );
  },
  (prevProps, nextProps) =>
    prevProps.slideIndex === nextProps.slideIndex &&
    prevProps.children === nextProps.slideIndex
);
