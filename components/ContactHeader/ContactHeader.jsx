import classList from "./ContactHeader.module.scss";
import React from "react";
import Section from "../Section/Section";
import dynamic from "next/dynamic";
import { FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import chatLogo from "../../assets/images/logo/chatLogo.svg";
import call from "../../assets/images/logo/call.png";
import message from "../../assets/images/logo/message.png";
import { openLiveChat } from "../../utils/Data/helpers";
import { phoneNumber } from "../../utils/Data/globalVariables";
const GetAQuotModal = dynamic(() => import("../GetAQuotModal/GetAQuotModal"));

const ContactHeader = () => {
  var [showQuotModal, setShowQuoteModal] = React.useState(false);
  return (
    <div className={classList.contact_header_wrapper}>
      <Section padding={0}>
        <div className={classList.contact_header_inner}>
          <div className={classList.social}>
            <a
              target="_blank"
              href="/">
              <FaFacebookF
                className={classList.social_icons}
                color="#fff"
                size={20}
              />
            </a>
            <a target="_blank" href="/">
              <FaInstagramSquare
                className={classList.social_icons}
                color="#fff"
                size={20}
              />
            </a>
            <a target="_blank" href="/">
              <FaTwitter
                className={classList.social_icons}
                color="#fff"
                size={20}
              />
            </a>
          </div>
          <div className={classList.contact_info}>
            <img src={message.src} alt="" />
            <a href="mailto:info@company.com">info@company.com</a>
          </div>
          <div className={classList.contact_info}>
            <img src={call.src} alt="" />
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </div>
          <div className={classList.contact_info_btn}>
            <img src={chatLogo.src} alt="" />
            <a onClick={() => setShowQuoteModal(true)} hover={true}>Get a quote</a>
          </div>
        </div>
      </Section>
      <GetAQuotModal
        show={showQuotModal}
        onHide={() => setShowQuoteModal(false)}
      />
    </div>
  );
};

export default ContactHeader;
