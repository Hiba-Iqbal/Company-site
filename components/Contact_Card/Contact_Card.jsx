import Paragraph from "../Paragraph/Paragraph";

import { FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

import style from "./Contact_Card.module.scss";

const getIcon = (type) => {
  switch (type) {
    case "Email":
      return <HiOutlineMail className={style.email} />;
    case "Phone":
      return <FaPhone className={style.phone} />;
    case "Location":
      return <MdLocationOn className={style.location} />;
    default:
      return null;
  }
};

const Contact_Card = ({ IconMark, content, title }) => {
  return (
    <div className={style.contact_card}>
      <div className={style.logo}>{getIcon(IconMark)}</div>
      <div className={style.description}>
        <Paragraph fontWeight="light">{title}</Paragraph>
        <Paragraph fontSize={16} fontWeight="medium">
          {content}
        </Paragraph>
      </div>
    </div>
  );
};

export default Contact_Card;
