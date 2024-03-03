import React from "react";
import classList from "./ContactOption.module.scss";
import { AiOutlineMessage, AiFillPhone } from "react-icons/ai";
import { openLiveChat } from "../../utils/Data/helpers";
import { phoneNumber } from "../../utils/Data/globalVariables";
import React from "react";

import dynamic from "next/dynamic";
const GetAQuotModal = dynamic(() => import("../GetAQuotModal/GetAQuotModal"));


const ContactOption = () => {
  var [showQuotModal, setShowQuoteModal] = React.useState(false);
  return (
    <>
      <div className={classList.contact_option_wrapper}>
        <div className={classList.text_us}>
          <span>
            <AiOutlineMessage />{" "}
            <a  onClick={() => setShowQuoteModal(true)} hover={true}
             href="#">
              Get a quote
            </a>
          </span>
        </div>
      </div>
      <div className={classList.contact_option_call_us}>
        <div className={classList.call_us}>
          <AiFillPhone /> <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </div>
      </div>
      <GetAQuotModal
        show={showQuotModal}
        onHide={() => setShowQuoteModal(false)}
      />
    </>
  );
};

export default ContactOption;
