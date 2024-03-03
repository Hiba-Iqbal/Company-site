import InnnerSection from "../InnerSection/InnnerSection";
import classList from "./UsableRow.module.scss";
import defaultImage from "../../assets/images/sample/sample4.png";
import Image from "next/image"

const UsableRow = ({
  image = defaultImage,
  children,
  customClass,
  backgroundColor = "transparent",
  style = {},
  reverse = false,
  gridGapClass,
  imageClass,
}) => {
  return (
    <>
      {reverse === true ? (
        <div className={`${classList.iAmUseableRow} ${gridGapClass}`}>
          <InnnerSection padding="0px">
            <div
              className={`${classList.content} ${customClass}`}
              style={{
                backgroundColor: `${backgroundColor}`,
                ...style,
              }}>
              {children}
            </div>
          </InnnerSection>
          <div className={classList.wrapperImage}>
            <Image src={image?.src || image} alt="" width={400} height={400} objectFit="contain" />
          </div>
        </div>
      ) : (
        <div className={`${classList.iAmUseableRow} ${gridGapClass}`}>
          <div className={classList.wrapperImage}>
          <Image src={image?.src || image} alt="" width={400} height={400} objectFit="contain" />
          </div>
          <InnnerSection padding="0px">
            <div
              className={`${classList.content} ${customClass}`}
              style={{
                backgroundColor: `${backgroundColor}`,
                ...style,
              }}>
              {children}
            </div>
          </InnnerSection>
        </div>
      )}
    </>
  );
};

export default UsableRow;
