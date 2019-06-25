import React, { useState } from "react";
import DynamicCarousel from "./DynamicCarousel";

function App() {
  const [contents, setContents] = useState([
    "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
    "https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg",
    "https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg"
  ]);
  const [flag, toggle] = useState(true);
  const onClick = () => {
    if (flag) {
      setContents([
        "https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg",
        "https://farm8.staticflickr.com/7367/27980898905_72d106e501_h_d.jpg",
        "https://farm8.staticflickr.com/7356/27980899895_9b6c394fec_h_d.jpg"
      ]);
    } else {
      setContents([
        "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
        "https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg",
        "https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg"
      ]);
    }
    toggle(!flag);
  };
  return (
    <div>
      <DynamicCarousel contents={contents} initialSlide={1} infinite={true}>
        {contents.map((content, idx) => {
          return <img alt={idx} src={content} key={`slide${idx}`} />;
        })}
      </DynamicCarousel>
      <button onClick={onClick}>ボタン</button>
    </div>
  );
}

export default App;
