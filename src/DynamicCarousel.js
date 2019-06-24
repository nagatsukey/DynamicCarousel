import React from "react";
import "./DynamicCarousel.css";

export default React.memo(() => {
  return (
    <div className="wrapper">
      <input type="radio" name="slider" id="slide1" />
      <input type="radio" name="slider" id="slide2" />
      <input defaultChecked={true} type="radio" name="slider" id="slide3" />
      <input type="radio" name="slider" id="slide4" />
      <input type="radio" name="slider" id="slide5" />

      <div className="slider-wrapper">
        <div className="inner">
          <article>
            <img src="https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg" />
          </article>

          <article>
            <img src="https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg" />
          </article>

          <article>
            <img src="https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg" />
          </article>

          <article>
            <img src="https://farm8.staticflickr.com/7367/27980898905_72d106e501_h_d.jpg" />
          </article>

          <article>
            <img src="https://farm8.staticflickr.com/7356/27980899895_9b6c394fec_h_d.jpg" />
          </article>
        </div>
      </div>

      <div className="slider-prev-next-control">
        <label htmlFor="slide1" />
        <label htmlFor="slide2" />
        <label htmlFor="slide3" />
        <label htmlFor="slide4" />
        <label htmlFor="slide5" />
      </div>

      <div className="slider-dot-control">
        <label htmlFor="slide1" />
        <label htmlFor="slide2" />
        <label htmlFor="slide3" />
        <label htmlFor="slide4" />
        <label htmlFor="slide5" />
      </div>
    </div>
  );
});
