import classList from "./ServicesDesign.module.scss";
import Section from "../Section/Section";
import Header from "../Header/Header";

const ServicesDesign = ({ image, heading }) => {
  return (
    <>
        <div className={classList.back}>
          <Section style={{margin: "50px 0px"}} >
            <div className={classList.services}>
              <div className={classList.content}>
                <Header
                  color="white"
                  fontWeight="bold"
                  fontSize="35"
                  style={{ marginBottom: "0px" }}>
                  {heading}
                </Header>
              </div>
              <div className={classList.imgContainer}>
                <img src={image.src} alt="" />
              </div>
            </div>
          </Section>
        </div>
    </>
  );
};

export default ServicesDesign;
