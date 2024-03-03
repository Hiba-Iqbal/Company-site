import React from "react";
import classList from "./CustomerFeedBackGifsBanner.module.scss";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import gif1 from "./../../assets/images/gifs/gitShow8.gif";
import gif2 from "./../../assets/images/gifs/gitShow7.gif";
import gif3 from "./../../assets/images/gifs/gitShow1.gif";
import gif4 from "./../../assets/images/gifs/gitShow6.gif";
import SimpleGif from "../SimpleGif/SimpleGif";

const CustomerFeedBackGifsBanner = () => {
  return (
    <div>
      <div className={classList.contentClass}>
        <Header fontWeight="bold" fontSize={40}>
          WHY <span style={{ color: "#B72A12" }}>CHOOSE</span> US
        </Header>
        <Paragraph>
          Logomatics is the best choice for all the pre-eminent businesses
          around the world. A constantly innovating team of certified experts
          will be dedicated to get the best design solutions to shape your brand
          image, helping it on its way to continued dominance.
        </Paragraph>
      </div>

      <div className={classList.gifMain}>
        <SimpleGif gifImage={gif1} content="DESIGN BRIEF" />
        <SimpleGif gifImage={gif2} content="INITIAL SAMPLES" />
        <SimpleGif gifImage={gif3} content="TWEAKING" />
        <SimpleGif gifImage={gif4} content="FINAL DELIVERY" />
      </div>
    </div>
  );
};

export default CustomerFeedBackGifsBanner;
