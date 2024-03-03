// **** LIBS IMPORTS ****
import React from "react";

// **** REUSABLE COMPONENTS ****
import Section from "../Section/Section";

// **** STYLE ****
import classList from "./ContactFormV2.module.scss";
import Button from "../Button/Button";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import phone from "../../assets/images/logo/phone.png";
import location from "../../assets/images/logo/location.png";
import email from "../../assets/images/logo/email.png";
import { openLiveChat } from "../../utils/Data/helpers";
import ContactPageForm from "../ContactPageForm/ContactPageForm";
import { phoneNumber } from "../../utils/Data/globalVariables";

const MapServicesContact = () => {
  return (
    <>
      <Section background={"#F7F7F8"}>
        <div className={classList.contactMapMain}>
          <div className={classList.content}>
            {/* <Button
              onClick={() => openLiveChat()}
              hover={true}
              style={{ marginBottom: "20px" }}>
              Talk to us
            </Button> */}
            <Header fontWeight="bold" fontSize="40">
              Contact Us Right Now!
            </Header>
            <Paragraph fontWeight="semi-bold" fontSize="25">
              Your project Take the next step
            </Paragraph>
            <Paragraph style={{ marginBottom: "25px" }}>
              We help new manufacturing companies enter the market, and
              companies with a history of gaining a modern face in the digital
              environment.
            </Paragraph>
            <div className={classList.list}>
              <img src={phone.src} alt="" />
              <Paragraph style={{ marginBottom: "0px" }}>
                <a href={`tel:${phoneNumber}`} className={classList.callnow}>
                  {" "}
                  {phoneNumber}
                </a>{" "}
              </Paragraph>
            </div>
            <div className={classList.list}>
              <img src={email.src} alt="" />
              <Paragraph style={{ marginBottom: "0px" }}>
                <a
                  href="mailto:info@company.com"
                  className={classList.callnow}>
                  info@company.com
                </a>{" "}
              </Paragraph>
            </div>
            <div className={classList.list}>
              <img src={location.src} alt="" />
              <Paragraph style={{ marginBottom: "0px" }}>
                <a
                  target="_blank"
                  href="/"
                  className={classList.callnow}>
                  address
                </a>{" "}
              </Paragraph>
            </div>
          </div>
          <div className={classList.contactFormArea}>
            <ContactPageForm
              description={""}
              heading={"Get In Touch"}
              buttonText={"Send Message"}
            />
          </div>
          {/* <div className={classList.mapDisplayArea}>
            <Map location={[24.882876, 67.16952]} />
          </div> */}
        </div>
      </Section>
    </>
  );
};

export default MapServicesContact;
