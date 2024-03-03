import classList from "./Logos.module.scss";
import topDesignLogo from "../../assets/images/logo/bannerLogo/top-design.webp";
import clutchLogo from "../../assets/images/logo/bannerLogo/clutch.svg";
import topDigitalLogo from "../../assets/images/logo/bannerLogo/top-digital-agency.svg";
import trustPilot from "../../assets/images/logo/bannerLogo/tttt.svg";
import goodFlims from "../../assets/images/logo/bannerLogo/goodFlims.svg";

const Logos = ({ positionsClass }) => {
  return (
    <>
      <div className={`${classList.banner_logo_mok} ${positionsClass}`}>
        <img src={topDesignLogo.src} alt="" />
        <img src={clutchLogo.src} alt="" />
        <img src={topDigitalLogo.src} alt="" />
        <img src={trustPilot.src} alt="" />
        <img src={goodFlims.src} alt="" />
      </div>
    </>
  );
};

export default Logos;
