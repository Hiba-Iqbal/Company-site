import React, {useState} from "react";
import Modal from "../Modal/Modal";
import classList from "./BrochureModal.module.scss";
import Paragraph from "../Paragraph/Paragraph";
import Header from "../Header/Header";
import Button from "../Button/Button";
import GetAQuotModal from '../GetAQuotModal/GetAQuotModal';

const BrochureModal = (props) => {
  const { show = true, onHide, data : {color, content, video, title}  } = props;
  var [showQuotModal, setShowQuoteModal] = useState(false);

  return (
    <>
      <Modal modal={show} setModal={onHide}>
        <div className={classList.brochure_modal_wrapper}>
          <div className={classList.flex_box}>
            <div className={classList.flex_cols}>
              <video autoPlay muted loop>
                <source src={video}/>
              </video>
            </div>
            <div className={`${classList.flex_cols} ${classList.content_section}`}>
              <div>
                <Paragraph>Our recent project</Paragraph>
                <Header fontWeight="semi-bold" color={color}>{title}</Header>
                {content.map((con, i) => (
                  <Paragraph key={i}>{con}</Paragraph>
                ))}
              </div>
              <div className={classList.download_action}>
                <Button onClick={()=> setShowQuoteModal(true)} hover={true}>Get a Quote</Button>
                <Button hover={true}>Download Document</Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <GetAQuotModal show={showQuotModal} onHide={()=> setShowQuoteModal(false)}/>
    </>
  );
};

export default BrochureModal;
