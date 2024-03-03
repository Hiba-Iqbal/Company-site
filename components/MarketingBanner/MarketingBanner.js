import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import Section from "../Section/Section";
import classList from "./MarketingBanner.module.scss";
import bgBanner from "../../assets/images/sample/bgBanner.png";
import mockupLaptop from "../../assets/images/sample/mockupLaptop.webp";
import liveChat from "../../assets/images/icons/liveChat.webp";
import phone2 from "../../assets/images/icons/phone2.webp";
import Button from "../Button/Button";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import { openLiveChat } from "../../utils/Data/helpers";
import { useState } from "react";
import GetAQuotModal from "../GetAQuotModal/GetAQuotModal";
import Image from "next/image";
import { phoneNumber } from "../../utils/Data/globalVariables";

function MarketingBanner() {
  var [showQuotModal, setShowQuoteModal] = useState(false);

  return (
    <>
      <div className={classList.bgBanner}>
        <Section padding="20px 0px">
          <div className={classList.mokupGrid}>
            <div className={classList.mokupBox}>
              <div className={classList.laptop_wrapper}>
                <Image
                  width={400}
                  height={400}
                  objectFit="contain"
                  src={mockupLaptop.src}
                  alt=""
                />
              </div>
            </div>
            <div>
              <Paragraph fontWeight="bold" fontSize="20" color="#272A3D">
                Endorse Your Business
              </Paragraph>
              <Header fontWeight={"bold"} color="#333333" fontSize="35">
                Get a Quote of our Services now!
              </Header>
              <Paragraph color="#333333">
                All you gotta do now is tell us what you want to achieve, and
                we'll show you how. Contact us directly and let our professional
                website developers devise a plan for you.
              </Paragraph>
            </div>
          </div>
        </Section>
      </div>
      <Section padding="10px" background="#fff">
        <div className={classList.chatGrid}>
          <span></span>
          <div className={classList.chatLine}>
            <div
              className={classList.support}
              // onClick={openLiveChat}
              onClick={() => setShowQuoteModal(true)}
              style={{ cursor: "pointer" }}>
              <Image src={liveChat.src} width={52} height={42} alt="" />
              <div className={classList.chatIcon}>
                <Paragraph marginBottom={0} color="#000">
                  24/7 Support
                </Paragraph>
                <Paragraph
                  style={{ cursor: "pointer" }}
                  // onClick={openLiveChat}
                  onClick={() => setShowQuoteModal(true)}
                  marginBottom={0}
                  color="#000">
                  Get a quote
                </Paragraph>
              </div>
            </div>
            {/* <Button
              hover={true}
              onClick={() => setShowQuoteModal(true)}
              style={{ borderRadius: "6px" }}
              >
              REQUEST A QUOTE
            </Button> */}
            <AnimatedButton
              onClick={() => setShowQuoteModal(true)}
              hoverEffect={true}
              fontSize={16}>
              REQUEST A QUOTE
            </AnimatedButton>
            <a href={`tel:${phoneNumber}`} className={classList.callNow}>
              <span>
                <Paragraph marginBottom={0} color="#000">
                  call Us Now
                </Paragraph>
                <Paragraph marginBottom={0} color="#000">
                  {phoneNumber}
                </Paragraph>
              </span>
              <Image src={phone2.src} width={50} height={50} alt="" />
            </a>
          </div>
        </div>
      </Section>
      <GetAQuotModal
        show={showQuotModal}
        onHide={() => setShowQuoteModal(false)}
      />
    </>
  );
}

export default MarketingBanner;
