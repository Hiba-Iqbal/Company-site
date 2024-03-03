import classList from "./WebPresenseV2.module.scss";
import Paragraph from "../../components/Paragraph/Paragraph";
import MarketingCard from "../MarketingCard/MarketingCard";
import webIcon from "../../assets/images/icons/webIcon.svg";
import ResponsiveIcon from "../../assets/images/icons/Responsive.svg";
import customizedIcon from "../../assets/images/icons/Customized.svg";
import searchIcon from "../../assets/images/icons/searchIcon.svg";
import securityIcon from "../../assets/images/icons/securityIcon.svg";
import timeIcon from "../../assets/images/icons/timeIcon.svg";
import AnimatedServiceCard from "../AnimatedServiceCard/AnimatedServiceCard";
import FlipCard from '../FlipCard/FlipCard';
import { keyfeature } from "../../utils/Data/Data";

const WebPresenseV2 = () => {
  return (
    <>
      <div className={classList.main}>
        <div></div>
        <div className={classList.mainContent}>
          <div className={classList.mainContentHeading}>
            <div>
              <h3>KEY FEATURES</h3>
            </div>
            <div>
              <h1>Build Concrete Digital Existence.</h1>
            </div>
            <Paragraph fontSize={14} style={{ textAlign: "center" }}>
              Our work is a testament to our expertise. It speaks aloud in
              respect of e-commerce, web and mobile application, SEO, Google ad
              words and email marketing, branding and social media marketing. It
              demonstrates the caliber of value achieved for businesses like
              yours.
            </Paragraph>
          </div>

          <div className={classList.mainContentGallery}>
              {keyfeature.map(({title,content,icon}) => (
                <FlipCard title={title} icon ={icon} content={content} />
              ))}              

          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default WebPresenseV2;
