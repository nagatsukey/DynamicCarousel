import React, { useState } from "react";
import DynamicCarousel, { SLIDE_ACTION } from "./DynamicCarousel";
import "./App.css";

const imageObjects = [
  {
    src: "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
    id: "doraemon"
  },
  {
    src: "https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg",
    id: "house"
  },
  {
    src: "https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg",
    id: "yuuyake"
  },
  {
    src: "https://sociopouch.files.wordpress.com/2014/06/nekolove1.jpg?w=640",
    id: "neko"
  },
  {
    src: "http://www.ueshima-coffee-ten.jp/philosophy/img/pic_box_taste.jpg",
    id: "coffee"
  },
  {
    src: "http://www.sanko-farm.jp/images/material/fm_tmt-02.jpg",
    id: "tomato"
  },
  {
    src:
      "https://ueno-zoo.mamakoe.jp/wp-content/uploads/2016/11/P-%E3%83%8F%E3%82%B7%E3%83%93%E3%83%AD%E3%82%B3%E3%82%A6-042%E3%83%88%E3%83%AA%E3%83%9F%E3%83%B3%E3%82%B0%E6%B8%88%E3%81%BF-min.jpg",
    id: "ueno-zoo"
  }
];

function App() {
  const [index, setIndex] = useState(1);
  const afterChange = slideAction => {
    if (slideAction === SLIDE_ACTION.NEXTING) {
      if (index <= imageObjects.length - 1) setIndex(index + 1);
    } else if (slideAction === SLIDE_ACTION.PREVING) {
      if (0 < index) setIndex(index - 1);
    }
  };
  const isStart = index === 0;
  const isEnd = index === imageObjects.length - 1;
  const startIndex = isStart ? 0 : index - 1;
  const endIndex = isEnd ? imageObjects.length : index + 2;
  const contents = imageObjects.slice(startIndex, endIndex);
  return (
    <div className="App">
      <DynamicCarousel
        afterChange={afterChange}
        isStart={isStart}
        isEnd={isEnd}
      >
        {contents.map((imageObject, idx) => {
          return (
            <img
              className="Image"
              alt={idx}
              src={imageObject.src}
              key={imageObject.id}
            />
          );
        })}
      </DynamicCarousel>
    </div>
  );
}

export default App;
