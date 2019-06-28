import React, { useState } from "react";
import DynamicCarousel from "./DynamicCarousel";
import "./App.css";

function App() {
  const [contents, setContents] = useState([
    "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
    "https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg",
    "https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg"
  ]);
  const onClickSetImage1 = () => {
    setContents([
      "https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg",
      "https://farm8.staticflickr.com/7367/27980898905_72d106e501_h_d.jpg",
      "https://sociopouch.files.wordpress.com/2014/06/nekolove1.jpg?w=640"
    ]);
  };
  const onClickSetImage2 = () => {
    setContents([
      "http://www.ueshima-coffee-ten.jp/philosophy/img/pic_box_taste.jpg",
      "http://www.sanko-farm.jp/images/material/fm_tmt-02.jpg",
      "https://ueno-zoo.mamakoe.jp/wp-content/uploads/2016/11/P-%E3%83%8F%E3%82%B7%E3%83%93%E3%83%AD%E3%82%B3%E3%82%A6-042%E3%83%88%E3%83%AA%E3%83%9F%E3%83%B3%E3%82%B0%E6%B8%88%E3%81%BF-min.jpg"
    ]);
  };
  return (
    <div className="App">
      <DynamicCarousel contents={contents} initialSlide={1} infinite={true}>
        {contents.map((content, idx) => {
          return (
            <img
              className="Image"
              alt={idx}
              src={content}
              key={`slide${idx}`}
            />
          );
        })}
      </DynamicCarousel>
      <button onClick={onClickSetImage1}>ボタン1</button>
      <button onClick={onClickSetImage2}>ボタン2</button>
    </div>
  );
}

export default App;
