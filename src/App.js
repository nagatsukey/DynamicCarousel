import React from "react";
import DynamicCarousel from "./DynamicCarousel";

function App() {
  const contents = [];
  return (
    <div>
      <DynamicCarousel contents={contents} initialSlide={1} infinite={true}>
        <img
          alt="1"
          src="https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg"
        />
        <img
          alt="2"
          src="https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg"
        />
        <img
          alt="3"
          src="https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg"
        />
        <img
          alt="4"
          src="https://farm8.staticflickr.com/7367/27980898905_72d106e501_h_d.jpg"
        />
        <img
          alt="5"
          src="https://farm8.staticflickr.com/7356/27980899895_9b6c394fec_h_d.jpg"
        />
      </DynamicCarousel>
    </div>
  );
}

export default App;
