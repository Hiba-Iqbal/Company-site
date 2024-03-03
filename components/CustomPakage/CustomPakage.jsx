import classList from "./CustomPakage.module.scss";
import Header from "../Header/Header";
import PackageList from "../PackageList/PackageList";
import Button from "../Button/Button";
import Discount from "../../assets/images/offerSale.png";
import CustomPriceShow from "./../CustomPriceShow/CustomPriceShow";

const ComboPackage = ({ isHome }) => {
  return (
    <>
      <div className={`${classList.packages_wrapper} `} id="ComboPackages">
        {/* <div className={classList.packages_items}>
          <div
            className={`${classList.header_items} ${classList.centralize_txt}`}>
            <img className={classList.discount} src={Discount.src} alt="" />

            <Header fontWeight="medium" variant="h3">
              Combo Packages
            </Header>
            <Header fontWeight="medium" variant="h1">
              Growth Seeker Package
            </Header>
          </div>
        </div> */}
        <CustomPriceShow />
      </div>
    </>
  );
};

export default ComboPackage;
