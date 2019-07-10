import React, { useState, useRef } from "react";
import { useSwipeable, LEFT, RIGHT } from "react-swipeable";
import cx from "classname";
import "./DynamicCarousel.css";

export const SLIDE_ACTION = {
  NOMAL: "NOMAL",
  PREVING: "PREVING",
  NEXTING: "NEXTING",
  RETURNING: "RETURNING"
};

export default React.memo(
  ({
    children = [],
    afterChange = () => {},
    isEnd = false,
    isStart = false
  }) => {
    const [slideActionState, setSlideActionState] = useState(
      SLIDE_ACTION.NOMAL
    );
    const [swipedDeltaX, setSwipedDeltaX] = useState(0);
    const refBlock = useRef(null);
    const isSwiping =
      slideActionState === SLIDE_ACTION.PREVING ||
      slideActionState === SLIDE_ACTION.NEXTING ||
      slideActionState === SLIDE_ACTION.RETURNING;
    const slideleStyle = index => {
      const standardMargin = -100 + index * 100;
      let slidingMargin = 0;
      if (slideActionState === SLIDE_ACTION.PREVING) {
        slidingMargin = 100;
      } else if (slideActionState === SLIDE_ACTION.NEXTING) {
        slidingMargin = -100;
      }
      const startMargin = isStart ? 100 : 0;
      return {
        marginLeft: `${standardMargin +
          slidingMargin +
          startMargin +
          -swipedDeltaX / 10}%`
      };
    };
    const handlers = useSwipeable({
      onSwiping: ({ deltaX }) => setSwipedDeltaX(deltaX),
      onSwiped: ({ velocity, dir }) => {
        const isStrongSwipe = velocity > 1;
        const isSwipedLeft = dir === LEFT;
        const isSwipedRight = dir === RIGHT;
        const halfClientWidth = refBlock.current.clientWidth / 2;
        const isSwipedOverHorizontal =
          swipedDeltaX < -halfClientWidth || swipedDeltaX > halfClientWidth;
        const shouldNextSlide =
          !isEnd && isSwipedLeft && (isSwipedOverHorizontal || isStrongSwipe);
        const shouldPrevSlide =
          !isStart &&
          isSwipedRight &&
          (isSwipedOverHorizontal || isStrongSwipe);
        if (shouldNextSlide) {
          setSlideActionState(SLIDE_ACTION.NEXTING);
        } else if (shouldPrevSlide) {
          setSlideActionState(SLIDE_ACTION.PREVING);
        } else {
          setSlideActionState(SLIDE_ACTION.RETURNING);
        }
        setSwipedDeltaX(0);
      },
      preventDefaultTouchmoveEvent: true,
      trackMouse: true
    });
    const slides = children.map((content, index) => {
      return (
        <article
          className={cx("Slide", { "Slide--Swiping": isSwiping })}
          style={slideleStyle(index)}
          key={`slide_${content.key}`}
          onTransitionEnd={() => {
            // 1つ目のスライドにだけtransition終了時のイベントを追加
            if (index === 0) {
              afterChange(slideActionState);
              setSlideActionState(SLIDE_ACTION.NOMAL);
            }
          }}
        >
          {content}
        </article>
      );
    });
    const onClickPrev = () => {
      setSlideActionState(SLIDE_ACTION.PREVING);
    };
    const onClickNext = () => {
      setSlideActionState(SLIDE_ACTION.NEXTING);
    };
    return (
      <React.Fragment>
        <div ref={refBlock}>
          <div className="Block" {...handlers}>
            {slides}
          </div>
        </div>
        <div className="SliderControl">
          {isStart ? null : (
            <button
              className="ButtonPrev"
              onClick={onClickPrev}
              disabled={isSwiping}
              style={isStart ? { visibility: true } : null}
            />
          )}
          {isEnd ? null : (
            <button
              className="ButtonNext"
              onClick={onClickNext}
              disabled={isSwiping || isEnd}
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
