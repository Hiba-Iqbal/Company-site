import { useState } from "react";
import { post, validateEmail, validatePhone } from "../../utils/Data/helpers";
import Button from "../Button/Button";
import Header from "../Header/Header";
import InputField from "../InputField/InputField";
import Paragraph from "../Paragraph/Paragraph";
import TextArea from "../TextArea/TextArea";
import classList from "./Form.module.scss";
import dynamic from 'next/dynamic'
// import ShowMessage from '../ShowMessage/ShowMessage';
const ShowMessage = dynamic(() => import('../ShowMessage/ShowMessage'))

const Form = ({
  heading,
  description,
  buttonText,
  className,
  headerClass,
  packageInfo,
  customPackageDetails = [],
  onHide,
}) => {
  // Input hanlders
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Error hanlders
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [messageErr, setMessageErr] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);


  const validateForm = () => {
    // if (!name) {
    //   setNameErr("Please enter your name");
    //   return false;
    // } else if (!email) {
    //   setNameErr(" ");
    //   setEmailErr("Please enter your email");
    //   return false;
    // } else if (!phone) {
    //   setNameErr(" ");
    //   setEmailErr(" ");
    //   setPhoneErr("Please enter your phone number");
    //   return false;
    // } else if (!message) {
    //   setNameErr(" ");
    //   setEmailErr(" ");
    //   setPhoneErr(" ");
    //   setMessageErr("Please enter your message");
    //   return false;
    // } else if (!validateEmail(email)) {
    //   setNameErr(" ");
    //   setMessageErr(" ");
    //   setPhoneErr(" ");
    //   setEmailErr("Please enter valid email");
    //   return false;
    // } else if (!validatePhone(phone)) {
    //   setNameErr(" ");
    //   setMessageErr(" ");
    //   setEmailErr(" ");
    //   setPhoneErr("Please enter valid phone number");
    //   return false;
    // } else {
    //   setNameErr(" ");
    //   setMessageErr(" ");
    //   setEmailErr(" ");
    //   setPhoneErr(" ");
    //   return true;
    // }
  };

  const handleCustomPackageBuy = async () => {
    // try {
    //   const data = {
    //     fullName: name,
    //     email: email,
    //     projectDescription: message,
    //     phone,
    //     customPackage: customPackageDetails
    //   };
    //   console.log("customPackageDetails", data);
    //   const res = await post("/custom-package", data);
    //   if (res.status) {
    //     setIsSubmitted(true);
    //   }
    //   setTimeout(() => {
    //     onHide();
    //   }, 1000);
    // } catch(error) {
    //   console.log(error)
    //   setIsSubmitted(false);
    //   setTimeout(() => {
    //     onHide();
    //   }, 1000);
    // }
  };

  const handleOrderNowCall = async() => {
    // try {
      
    //   const data = {
    //     fullName: name,
    //     packageName: packageInfo.packageName,
    //     packageType: packageInfo.packageType,
    //     email: email,
    //     projectDescription: message,
    //     phone
    //   };
    //   const res = await post("/order", data);
    //   if (res.status) {
    //     setIsSubmitted(true);
    //   }
    //   setTimeout(() => {
    //     onHide();
    //   }, 1000);
    // } catch (error) {
    //   console.log(error)
    //   setIsSubmitted(false);
    //   setTimeout(() => {
    //     onHide();
    //   }, 1000);
    // }
  };

  const submitFormHanlder = async (e) => {
  //   e.preventDefault();
  //     if (customPackageDetails.length > 0) {
  //       handleCustomPackageBuy();
  //     } else {
  //       handleOrderNowCall();
  //     }
  // };

  // const inputChangeHandler = (event) => {
  //   const { name, value } = event.target;
  //   if (name === "name") {
  //     setName(value);
  //   } else if (name === "email") {
  //     setEmail(value);
  //   } else if (name === "phone") {
  //     setPhone(value);
  //   } else if (name === "message") {
  //     setMessage(value);
  //   }
  };

  return (
    <>
      <form className={`${classList.formWidth} ${className}`}>
        <Header customClass={headerClass} fontWeight="semi-bold">
          {heading}
        </Header>
        {description && <Paragraph>{description}</Paragraph>}
        <InputField
          value={name}
          onChange={(e) => inputChangeHandler(e)}
          name="name"
          placeholder="Name"
          fieldName={"Full Name"}
          errorMessage={nameErr}
        />
        <InputField
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => inputChangeHandler(e)}
          name="email"
          fieldName={"Email"}
          errorMessage={emailErr}
          required={true}
        />
        <InputField
          type="tel"
          value={phone}
          onChange={(e) => inputChangeHandler(e)}
          name="phone"
          placeholder="Phone No."
          fieldName={"Phone No."}
          errorMessage={phoneErr}
        />
        <TextArea
          type="text"
          value={message}
          onChange={(e) => inputChangeHandler(e)}
          name="message"
          placeholder="Project Description"
          fieldName={"Project Description"}
          errorMessage={messageErr}
        />
        <Button
          onClick={submitFormHanlder}
          htmlType="submit"
          color="white"
          hover={true}
          style={{ marginBottom: "0px", marginTop: "10px" }}>
          {buttonText}
        </Button>
      </form>
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

export default Form;
