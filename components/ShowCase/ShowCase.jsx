import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import classList from "./ShowCase.module.scss";
import sample from "../../assets/images/sample/sample1.svg";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";
import Header from "../Header/Header";
import { showCaseData } from "../../utils/Data/Data";
import Section from "../Section/Section";
import ImageViewer from "../ImageViewer/ImageViewer";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const StyledBtn = ({ children, selected, type, btnColor, ...restProps }) => (
  <>
    <Button
      backgroundColor={selected === type ? "#072227" : "transparent"}
      color={!(selected === type) ? btnColor : "white"}
      fontSize={12}
      fontWeight="semi-bold"
      customClass={classList.buttonHover}
      style={
        (!(selected === type)
          ? { border: "none", transiton: "all 300ms ease-in" }
          : { border: "none", transiton: "all 300ms ease-in" },
        {
          borderRadius: "6px",
          transform: "scale(1.1)",
          padding: "8px",
          transiton: "all 300ms ease-in",
        })
      }
      {...restProps}>
      {children}
    </Button>
  </>
);

const AnimatedCards = ({ item, setCurrentImage, setShowModal, index }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.04 }}>
    <ProductCard
      setCurrentImage={setCurrentImage}
      setShowModal={setShowModal}
      imageLink={item.img}
    />
  </motion.div>
);

const ShowCase = ({
  // backgroundColor = "#00FF00",
  backgroundColor = "#659DBD",
  // backgroundColor = "#D79922",
  btnColor = "white",
  // btnColor= "white",
  data,
}) => {
  const [selected, setSelected] = useState("airline");
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  // console.log("selected",selected);
  // console.log("logicc", !data)

  const filterData =
    data ||
    showCaseData.filter((item) => {
      // const finder = type || selected;
      const finder = selected;

      return item?.type?.toLowerCase() === finder?.toLowerCase();
    });

  return (
    <>
      <Section background={backgroundColor}>
        <div className={classList.main}>
          {!data && (
            <div>
              <div className={classList.headingWidth}>
                <Header color={btnColor} fontWeight={"bold"}>
                  See Our Recent Creations
                </Header>
                <Paragraph fontWeight="semi-bold" color={btnColor}>
                  Whether you are looking for Custom E-Commerce Website
                  Development, Custom Website Design Services, Best Shopify
                  Design Websites, Web Design and Digital Marketing Agency, we
                  are a one in all solution design company for you.
                </Paragraph>
                <Header color={btnColor} fontWeight={"bold"}>
                  PORTFOLIO
                </Header>
              </div>
              <div
                className={classList.wrapperButton}
                style={{ border: `1px solid ${btnColor}` }}>
                <StyledBtn
                  onClick={() => setSelected("airline")}
                  btnColor={btnColor}
                  selected={selected}
                  type="airline">
                  Airline
                </StyledBtn>
                <StyledBtn
                  onClick={() => setSelected("automotive")}
                  btnColor={btnColor}
                  selected={selected}
                  type="automotive">
                  Automotive
                </StyledBtn>
                <StyledBtn
                  onClick={() => setSelected("bakery")}
                  btnColor={btnColor}
                  selected={selected}
                  type="bakery">
                  Bakery
                </StyledBtn>
                <StyledBtn
                  onClick={() => setSelected("beverage")}
                  btnColor={btnColor}
                  selected={selected}
                  type="beverage">
                  Beverage
                </StyledBtn>
                <StyledBtn
                  onClick={() => setSelected("crypto")}
                  btnColor={btnColor}
                  selected={selected}
                  type="crypto">
                  Crypto
                </StyledBtn>
                <StyledBtn
                  onClick={() => setSelected("donation")}
                  btnColor={btnColor}
                  selected={selected}
                  type="donation">
                  Donation
                </StyledBtn>
                <StyledBtn
                  onClick={() => setSelected("e-commerce")}
                  btnColor={btnColor}
                  selected={selected}
                  type="e-commerce">
                  E-Commerce
                </StyledBtn>
                <StyledBtn
                  onClick={() => setSelected("fashion")}
                  btnColor={btnColor}
                  selected={selected}
                  type="fashion">
                  Fashion
                </StyledBtn>
                <StyledBtn
                  onClick={() => setSelected("finance")}
                  btnColor={btnColor}
                  selected={selected}
                  type="finance">
                  Finance
                </StyledBtn>
                <StyledBtn
                  onClick={() => setSelected("entertainment")}
                  btnColor={btnColor}
                  selected={selected}
                  type="entertainment">
                  Entertainment
                </StyledBtn>
                <StyledBtn
                  onClick={() => setSelected("realstate")}
                  btnColor={btnColor}
                  selected={selected}
                  type="realstate">
                  Real State
                </StyledBtn>
                {/* <StyledBtn
                onClick={() => setSelected("webApp")}
                btnColor={btnColor}
                selected={selected}
                type="webApp">
                Web Application
              </StyledBtn> */}
                <StyledBtn
                  onClick={() => setSelected("mobileApp")}
                  btnColor={btnColor}
                  selected={selected}
                  type="mobileApp">
                  Mobile Application
                </StyledBtn>
                {/* <StyledBtn
                onClick={() => setSelected("property")}
                btnColor={btnColor}
                selected={selected}
                type="property">
                Property
              </StyledBtn>
              <StyledBtn
                onClick={() => setSelected("tours")}
                btnColor={btnColor}
                selected={selected}
                type="tours">
                Tours
              </StyledBtn> */}
              </div>
            </div>
          )}
          {data && (
            <Header
              color="white"
              fontWeight="bold"
              style={{ marginBottom: "20px" }}>
              PORTFOLIO
            </Header>
          )}

          <AnimatePresence exitBeforeEnter>
            <motion.div variants={variants} className={classList.projectCard}>
              {selected && (
                <>
                  {filterData.slice(0, data ? 9 : 6).map((item, index) => (
                    <AnimatedCards
                      index={index}
                      key={item.img}
                      setShowModal={setShowModal}
                      setCurrentImage={setCurrentImage}
                      item={item}
                    />
                  ))}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <ImageViewer
          image={currentImage}
          show={showModal}
          onHide={() => setShowModal(false)}
        />
      </Section>
    </>
  );
};

export default ShowCase;
