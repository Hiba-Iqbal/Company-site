import InnnerSection from "../InnerSection/InnnerSection";
import classList from "./UsableRowV2.module.scss";
import defaultImage from "../../assets/images/sample/sample4.png";

const UsableRow = ({
  image = defaultImage,
  children,
  customClass,
  backgroundColor = "transparent",
  style = {},
  reverse,
  gridGapClass,
  imageClass,
  isReverse = false,
}) => {
  return (
    <>
      <div
        className={`${classList.iAmUseableRow} ${
          isReverse && classList.makeItRevese
        } ${gridGapClass}`}>
        <div
          className={`${classList.content} ${customClass}`}
          style={{
            backgroundColor: `${backgroundColor}`,
            ...style,
          }}>
          {children}
        </div>
        <div className={classList.wrapperImage}>
          <img src={image?.src} alt="" className={`${imageClass}`} />
        </div>
      </div>
    </>
  );
};

export default UsableRow;
