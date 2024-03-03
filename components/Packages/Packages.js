import { useState,useEffect } from "react";
import classList from "./Packages.module.scss";
import Section from "../../components/Section/Section";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import PricingPlanCard from "../PricingPlanCard/PricingPlanCard";
import ComboPricingPlanCard from "../ComboPricingPlanCard/ComboPricingPlanCard";
import ListItem from "../ListItem/ListItem";
import ListItemV2 from "../ListItemV2/ListItemV2";
import { pricingData } from "../../utils/Data/Data";
import Button from "../../components/Button/Button";
import GetAQuotModal from "../GetAQuotModal/GetAQuotModal";
import { useRouter } from "next/router";

const StyledBtn = ({ children, selected, type, ...restProps }) => (
  <>
    <Button
      backgroundColor={selected === type ? "#1d2228" : "transparent"}
      color={!(selected === type) ? "#000" : "white"}
      fontSize={12}
      fontWeight={400}
      customClass={classList.buttonHover}
      style={
        (!(selected === type) ? { border: "none" } : { border: "none" },
        { borderRadius: "6px", transform: "scale(1.05)", padding: "8px" })
      }
      {...restProps}>
      {children}
    </Button>
  </>
);

const Packages = ({ type,isPackInURL, isCustomAction = false }) => {
  var [showQuotModal, setShowQuoteModal] = useState(false);
  const [selected, setSelected] = useState("web");
  const router = useRouter();
  
  const filterData = pricingData.find((v) => {
    const finder = type || selected;
    return v.type === finder;
  });

  const navigateToSelectedPack = (selected) => {
    const qs = `?packageName=${selected}`;
    router.push(`/packages/${qs}`, null, { shallow: true });
  };

  console.log("isPackInURL",isPackInURL)
  useEffect (()=>{
    if(isPackInURL) {
      setSelected(isPackInURL)
    }
  },[isPackInURL])

  return (
    <>
      <Section>
        {!type && (
          <>
            <Header
              fontSize={40}
              fontWeight="bold"
              style={{ margin: "auto", textAlign: "center" }}>
              Best Web Design and{" "}
              <span style={{ color: "#B72A12" }}>Development Company</span>
            </Header>
            <Paragraph style={{ textAlign: "center", margin: "40px 0 0 0" }}>
              We help our clients elevate their business through engaging brand
              identities and innovative digital marketing techniques. Looking to
              expand your brand reach and maximize your ROI? Let us help you
              create a creative, practical, responsive, intuitive, SEO-friendly,
              attractive, and eye-catching web presence to capture more clients.
              We develop agile websites that look good and provide seamless
              UI/UX. If you are looking for best website builder for digital
              marketing agency, we are here to offer our services.
            </Paragraph>

            <div className={classList.wrapperButton}>
              <StyledBtn
                onClick={() => setSelected("web")}
                selected={selected}
                type="web">
                Website Design
              </StyledBtn>
              <StyledBtn
                onClick={() => setSelected("eCommerce")}
                selected={selected}
                type="eCommerce">
                E-Commerce Solution
              </StyledBtn>
              {/* <StyledBtn
                onClick={() => setSelected("web-applcations")}
                selected={selected}
                type="web-applcations">
                Web Appplication
              </StyledBtn> */}
              <StyledBtn
                onClick={() => setSelected("brand")}
                selected={selected}
                type="brand">
                Branding
              </StyledBtn>
              {/* ANIMATION HIDE FOR NOW */}
              {/* <StyledBtn
                onClick={() => setSelected("videoAnimation")}
                selected={selected}
                type="videoAnimation">
                Animation
              </StyledBtn> */}
              <StyledBtn
                onClick={() => setSelected("seo")}
                selected={selected}
                type="seo">
                Digital Marketing
              </StyledBtn>
              <StyledBtn
                onClick={() => setSelected("combo")}
                selected={selected}
                type="combo">
                Combo
              </StyledBtn>
            </div>
          </>
        )}

        <div className={classList.our_packages}>
          <div className={classList.packages_flex_row}>
            {!(selected === "combo") &&
              filterData?.packages?.map(
                ({ type, price, discountPrice, services }, i) => (
                  <PricingPlanCard
                    key={i}
                    netAmount={price}
                    discountPrice={discountPrice}
                    title={type}
                    packageInfo={{ packageType: selected, packageName: type }}>
                    <ul>
                      {services?.map((data) => (
                        <ListItem content={data} />
                      ))}
                    </ul>
                  </PricingPlanCard>
                )
              )}
            {selected === "combo" &&
              filterData?.packages?.map(
                ({ type, price, discountPrice, services }, i) => (
                  <ComboPricingPlanCard
                    key={i}
                    netAmount={price}
                    discountPrice={discountPrice}
                    title={type}>
                    <ul>
                      {services?.map((data) => (
                        <>
                          <ListItemV2 dotIcon={true} content={data.type} />
                          {data?.subservices?.map((subData) => (
                            <ListItemV2 content={subData} />
                          ))}
                        </>
                      ))}
                    </ul>
                  </ComboPricingPlanCard>
                )
              )}
          </div>

          {!isPackInURL && (
            <div className={classList.getAQouteBtn}>
              <Button
                onClick={() => navigateToSelectedPack(selected)}
                hover={true}>
                View all packages
              </Button>
            </div>
          )}

          {isCustomAction && (
            <div className={classList.getAQouteBtn}>
              <Button onClick={() => setShowQuoteModal(true)} hover={true}>
                Get a quote
              </Button>
            </div>
          )}
        </div>
      </Section>
      <GetAQuotModal
        show={showQuotModal}
        onHide={() => setShowQuoteModal(false)}
      />
    </>
  );
};

export default Packages;
