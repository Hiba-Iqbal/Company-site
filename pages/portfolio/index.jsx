import Section from "../../components/Section/Section";
import UsableRow from "../../components/useAbleRow/UsableRow";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import ShowCaseWrapper from "../../components/ShowCaseWrapper/ShowCaseWrapper";
import Paragraph from "../../components/Paragraph/Paragraph";
import TestimonialV2 from "../../components/TestimonialV2/TestimonialV2";
import ContactForm from "../../components/ContactForm/ContactForm";
import allDevices from "../../assets/images/sample/allDevices.png";
import man from "../../assets/images/sample/man.png";
import classList from "./index.module.scss";
import bg from "../../assets/images/sample/portFolio.png";
import ReuseableRow from "../../components/ReuseableRow/ReuseableRow";
import { useState } from "react";
import GetAQuotModal from "../../components/GetAQuotModal/GetAQuotModal";
import { openLiveChat } from "../../utils/Data/helpers";
import Head from "next/head";
import { phoneNumber } from "../../utils/Data/globalVariables";

const index = () => {
  var [showQuotModal, setShowQuoteModal] = useState(false);

  return (
    <>
      <Head>
        <title>Portfolio | Company</title>
      </Head>
      <ReuseableRow
        backgroundImage={bg}
        contentImage={allDevices}
        customClass={classList.heightWrapper}>
        <Header color="white" fontWeight="bold" fontSize="45">
          Our mission is to accelerate the adoption of crypto assets
        </Header>
        <div className={classList.childButtons}>
          <Button
            onClick={() => setShowQuoteModal(true)}
            backgroundColor="#FFFFFF"
            color="#1D2228"
            hoverLight={true}
            style={{
              marginRight: "10px",
              marginBottom: "10px",
            }}>
            Lets Get Started
          </Button>
          <Button
            onClick={openLiveChat}
            hover={true}
            backgroundColor="transparent"
            style={{ border: "1px solid white" }}>
            Talk to our experts
          </Button>
        </div>
      </ReuseableRow>
      <ShowCaseWrapper  />
      <ReuseableRow
        backgroundImage={"none"}
        contentImage={man}
        imageClass={classList.widthUnset}>
        <Paragraph>Web Design Solutions</Paragraph>
        <Header fontWeight="bold" fontSize="30">
          Solving Complex Business Problems And Meeting User Needs
        </Header>
        <Paragraph>
          The specialists at Core Designs builds each website keeping in mind
          your company's exact requirements and objectives. Our aim is to create
          a professional, branded website for your company that will set it
          apart from the competition. Ease of navigation and call to action are
          always the topmost priority during our design process. We are known
          for websites that produce results.
        </Paragraph>
        <div className={classList.childButtons}>
          <Button
            onClick={() => setShowQuoteModal(true)}
            hover={true}
            color="white"
            style={{
              marginRight: "10px",
              marginBottom: "10px",
              borderRadius: "6px",
            }}>
            Get Started
          </Button>
          <a href={`tel:${phoneNumber}`}>
            <Button
              hoverLight={true}
              color="black"
              backgroundColor="transparent"
              style={{ border: "1px solid black", borderRadius: "6px" }}>
              {phoneNumber}
            </Button>
          </a>
        </div>
      </ReuseableRow>
      <TestimonialV2 />
      <ContactForm />
      <GetAQuotModal
        show={showQuotModal}
        onHide={() => setShowQuoteModal(false)}
      />
    </>
  );
};

export default index;
