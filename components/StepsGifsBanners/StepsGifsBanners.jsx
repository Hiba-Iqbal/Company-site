import React from "react";
import classList from "./StepsGifsBanners.module.scss";
import GifsBanner from "../GifsBanner/GifsBanner";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import gif1 from "./../../assets/images/gifs/gitShow5.gif";
import gif2 from "./../../assets/images/gifs/gitShow3.gif";
import gif3 from "./../../assets/images/gifs/gitShow4.gif";
import gif4 from "./../../assets/images/gifs/gitShow2.gif";

const StepsGifsBanners = () => {
  return (
    <div>
      <div className={classList.contentClass}>
        <Header fontWeight="bold" fontSize={40}>
          LOGO <span style={{ color: "#B72A12" }}>DESIGN</span> PROCESS
        </Header>
        <Paragraph>
          Our order process comprises of 4 easy and simple steps that save you a
          great deal of time
        </Paragraph>
      </div>

      <div className={classList.gifMain}>
        <GifsBanner
          gifImage={gif1}
          content="DESIGN BRIEF"
          count={1}
          afterEffect={true}
        />
        <GifsBanner
          gifImage={gif2}
          content="INITIAL SAMPLES"
          count={2}
          afterEffect={true}
        />
        <GifsBanner
          gifImage={gif3}
          content="TWEAKING"
          count={3}
          afterEffect={true}
        />
        <GifsBanner gifImage={gif4} content="FINAL DELIVERY" count={4} />
      </div>
    </div>
  );
};

export default StepsGifsBanners;
