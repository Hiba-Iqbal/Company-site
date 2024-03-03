import MultiSlider from "../../components/MultiSlider/MultiSlider.js";
import foodchoo from "../../assets/images/logo/foodChoo.svg";
import jobsmideast from "../../assets/images/logo/jobsmideast.svg";
import click from "../../assets/images/logo/click.svg";
import clickTeam from "../../assets/images/logo/clickTeam.svg";
import homeOwner from "../../assets/images/logo/homeOwner.svg";
import miprotector from "../../assets/images/logo/miprotector.svg";
import neighBiz from "../../assets/images/logo/neighBiz.svg";
import pakGo from "../../assets/images/logo/pakGo.svg";
import pennyPunch from "../../assets/images/logo/pennyPunch.svg";
import quickDelivery from "../../assets/images/logo/quickDelivery.svg";
import roadex from "../../assets/images/logo/roadex.svg";
import urbxn from "../../assets/images/logo/urbxn.svg";

const LogoSlider = () => {
  const images = [
    foodchoo,
    jobsmideast,
    click,
    clickTeam,
    homeOwner,
    miprotector,
    neighBiz,
    pakGo,
    pennyPunch,
    quickDelivery,
    roadex,
    urbxn,
  ];

  return (
    <div>
      {/* <MultiSlider autoPlay={true} showDots={false} images={images} /> */}
    </div>
  );
};

export default LogoSlider;
