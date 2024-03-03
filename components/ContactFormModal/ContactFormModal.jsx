import Form from "../Form/Form";
import style from "./ContactFormModal.module.scss";

const ContactFormModal = ({packageInfo, onHide,customPackageDetails}) => {
  return (
    <div className={style.contactFormMain}>
      <Form onHide={onHide} packageInfo={packageInfo} customPackageDetails={customPackageDetails} heading={"Get in touch"} />
    </div>
  );
};

export default ContactFormModal;
