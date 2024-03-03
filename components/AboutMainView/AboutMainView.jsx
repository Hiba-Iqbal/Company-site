import classList from "./AboutMainView.module.scss";
import quotes from "../../assets/images/icons/quotes.svg";
import sample1 from "../../assets/images/sample/sample1.svg";
import sample2 from "../../assets/images/sample/sample2.svg";
import aboutImages from "../../assets/images/sample/aboutImages.png";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";

const AboutMainView = () => {
  return (
    <>
      <div className={classList.iAmAboutMainView}>
        <div className={classList.wrapperMainImage}>
          <img src={aboutImages.src} alt="" />
        </div>
        <div className={classList.wrapperMainContent}>
          <Header>
            We’re A Design, Marketing And Strategic Development Company
          </Header>
          <Paragraph>
            Our digital design, marketing and development strategists have vast
            practical experience in multi-faceted mediums including Logo Design,
            Brand Development, Marketing Collateral, SEO, Social and Digital
            Marketing, Mobile Web Applications and others.
          </Paragraph>
          <div className={classList.quotations}>
            <img src={quotes.src} alt="" />
            <Paragraph>
              Whatever your business may be whether you run a creative agency, a
              digital studio.
            </Paragraph>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMainView;
