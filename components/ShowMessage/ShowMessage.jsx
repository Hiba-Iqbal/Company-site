import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ReactDom from "react-dom";
import classList from "./ShowMessage.module.scss";
import { FaCheckCircle } from "react-icons/fa";

const Background = ({
  children,
  innerRef,
  infoType = "success",
  ...restProps
}) => {
  const getInfoTypeClass = (info) => {
    if (info === "success") {
      return classList.success;
    } else if (info === "error") {
      return classList.error;
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeIn", duration: 0.05 }}>
      <div
        {...restProps}
        ref={innerRef}
        className={`${classList.background} ${classList.center}`}>
        <div
          className={`${classList.contentDiv} ${getInfoTypeClass(infoType)}`}>
          {infoType === "success" && <FaCheckCircle color="#fff" size={20} />}
          {/* <FaFacebookF color="#fff" size={20} /> */}
          <div className={classList.contentDetails}>{children}</div>
        </div>
      </div>
    </motion.div>
  );
};

const ShowMessage = ({ modal, setModal, infoType = "success", children }) => {
  var modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setModal(false);
    }
  };

  const handleTimeout = () => {
    setModal(false);
  };

  useEffect(() => {
    if (modal) {
      setTimeout(() => {
        handleTimeout();
      }, 3000);
    }
  }, [modal]);

  if (!modal) return null;
  return ReactDom.createPortal(
    <Background innerRef={modalRef} infoType={infoType} onClick={closeModal}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.1, duration: 0.2, ease: "easeOut" }}>
        {children}
      </motion.div>
    </Background>,
    document.getElementById("modal")
  );
};

export default ShowMessage;
