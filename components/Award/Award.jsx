import classList from "./Award.module.scss";
import clutch from "../../assets/images/logo/clutch.png";
import topDigital from "../../assets/images/logo/topDigital.png";
import bigAds from "../../assets/images/logo/bigAds.png";
import googlePartner from "../../assets/images/logo/googlePartner.png";
import mozLocal from "../../assets/images/logo/mozLocal.png";
import semRush from "../../assets/images/logo/semRush.png";
import Section from "../Section/Section";

const Award = () => {
  const imgArray = [
    clutch,
    semRush,
    topDigital,
    googlePartner,
    bigAds,
    mozLocal,
  ];
  return (
    <>
      <Section padding="0px">
        <div className={classList.award}>
          {imgArray.map((item, index) => (
            <div className={classList.awardImgBox} key={index}>
              <img src={item.src} alt="" />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Award;
