import {useState} from "react";
import Modal from "../Modal/Modal";
import GetAQuot from "../GetAQuot/GetAQuot";
import classList from "./GetAQuotModal.module.scss";
import ShowMessage from "../ShowMessage/ShowMessage";

const GetAQuotModal = (props) => {
  const { show, onHide } = props;
  // Form submit handler
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <>
      <Modal modal={show} setModal={onHide}>
        <div className={classList.get_a_quot_modal}>
          <GetAQuot
            isSubmitted={isSubmitted}
            setIsSubmitted={setIsSubmitted}
            setParentModal={onHide}
          />
        </div>
      </Modal>
      {isSubmitted && (
        <ShowMessage
          modal={isSubmitted}
          setModal={setIsSubmitted}
          infoType="success">
          Successfully submitted
        </ShowMessage>
      )}
    </>
  );
};

export default GetAQuotModal;
