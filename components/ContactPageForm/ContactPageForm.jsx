import { useState } from "react";
import {
  budgetOption,
  businessOption,
  industryOptions,
} from "../../utils/Data/globalVariables";
import { post, validateEmail, validatePhone } from "../../utils/Data/helpers";
import Button from "../Button/Button";
import CustomSelect from "../CustomSelect/CustomSelect";
import Header from "../Header/Header";
import InputField from "../InputField/InputField";
import Paragraph from "../Paragraph/Paragraph";
import TextArea from "../TextArea/TextArea";
import classList from "./ContactPageForm.module.scss";
import ShowMessage from "../ShowMessage/ShowMessage";

const ContactPageForm = ({
  heading,
  description,
  buttonText,
  className,
  headerClass,
}) => {
  // Input hanlders
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [budgetValue, setBudgetValue] = useState("");
  const [industry, setIndustry] = useState("");

  // Error hanlders
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [messageErr, setMessageErr] = useState("");

  // Form submit handler
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

  const submitFormHanlder = async (e) => {
    // e.preventDefault();
    // if (validateForm()) {
    //   try {
    //     const data = {
    //       name,
    //       email,
    //       projectDescription: message,
    //       budget: budgetValue,
    //       business: businessName,
    //       industry,
    //       phoneNo: phone,
    //     };
    //     const res = await post("/contact", data);
    //     if (res.statusCode === 201 || res.status) {
    //       setIsSubmitted(true);
    //     }
    //     console.log("res", res);
    //   } catch (error) {
    //     setIsSubmitted(false);
    //     console.log(error);
    //   }
    // }
  };

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "message") {
      setMessage(value);
    }
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
        <div className={classList.customDropDown}>
          <CustomSelect
          style={{marginBottom: "10px", borderBottom:"solid 2px #d4d4d4",}}
            placeholder="Business"
            type="light"
            Options={businessOption}
            onSelect={(e) => {
              setBusinessName(e);
            }}
          />
        </div>
        <div className={classList.customDropDown}>
          <CustomSelect
          style={{marginBottom: "10px", borderBottom:"solid 2px #d4d4d4",}}
            placeholder="Industry"
            type="light"
            Options={industryOptions}
            onSelect={(e) => {
              setIndustry(e);
            }}
          />
        </div>
        <div className={classList.customDropDown}>
          <CustomSelect
          style={{marginBottom: "10px", borderBottom:"solid 2px #d4d4d4",}}
            placeholder="Budget"
            type="light"
            Options={budgetOption}
            onSelect={(e) => {
              setBudgetValue(e);
            }}
          />
        </div>
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
        {/* {console.log("isSubmitted", isSubmitted)} */}
        {isSubmitted && (
          <ShowMessage
            modal={isSubmitted}
            // setModal={setIsSubmitted}
            infoType="success">
            Successfully submitted
          </ShowMessage>
        )}
      </form>
    </>
  );
};

export default ContactPageForm;
