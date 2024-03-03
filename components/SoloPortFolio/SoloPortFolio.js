import { useState } from "react";
import classList from "./SoloPortFolio.module.scss";
import Section from "../Section/Section";
import { showCaseData } from "../../utils/Data/Data";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/ProductCard";
import ImageViewer from "../ImageViewer/ImageViewer";

const SoloPortFolio = ({}) => {
  const filterData = showCaseData.filter((item) => item.type === "eCommerce");
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  return (
    <>
      <div className={classList.soloPortfolio}>
        <Section>
          <div className={classList.mainSection}>
            <Header color="white" fontWeight="bold" fontSize="25">
              PORTFOLIO
            </Header>
            <div className={classList.grid}>
              {filterData.slice(0, 9).map(({ img }) => (
                <div className={classList.imgContainer}>
                  <ProductCard
                    setCurrentImage={setCurrentImage}
                    setShowModal={setShowModal}
                    imageLink={img}
                  />
                </div>
              ))}
            </div>
          </div>
          <ImageViewer
            image={currentImage}
            show={showModal}
            onHide={() => setShowModal(false)}
          />
        </Section>
      </div>
    </>
  );
};

export default SoloPortFolio;
