import classList from "./ReuseableRow.module.scss";
import Section from "../Section/Section";
import UsableRow from "../useAbleRow/UsableRow";
import Button from "../Button/Button";
import Header from "../Header/Header";
import bg from "../../assets/images/sample/portFolio.png";

const ReuseableRow = ({
  backgroundImage,
  contentImage,
  children,
  imageClass,
  customClass="",
  cover=false
}) => {
  return (
    <>
      <div
        className={`${classList.portFolios} ${customClass} ${cover && classList.cover}`}
        style={{
          backgroundImage: `url(${
            (backgroundImage ? backgroundImage : bg).src
          })`,
        }}>
        <Section>
          <UsableRow
            reverse
            image={contentImage}
            customClass={classList.alignCenter}
            imageClass={imageClass}>
            {children}
          </UsableRow>
        </Section>
      </div>
    </>
  );
};

export default ReuseableRow;
