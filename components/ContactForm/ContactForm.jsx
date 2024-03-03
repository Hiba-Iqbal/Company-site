import { useState } from "react";
import classList from "./ContactForm.module.scss";

import Section from "../Section/Section";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";
import GetAQuot from "../GetAQuot/GetAQuot";
import CustomSelect from "../CustomSelect/CustomSelect";
import Link from "next/link";
import {
  businessOption,
  budgetOption,
} from "../../utils/Data/globalVariables";
import { phoneNumber } from "../../utils/Data/globalVariables";
import ShowMessage from "../ShowMessage/ShowMessage";
import { post } from "../../utils/Data/helpers";
const ContactForm = () => {
  // Form submit handler
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Input hanlders
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const [businessValue, setBusinessValue] = useState("");
  const [budgetValue, setBudgetValue] = useState("");
  const [options, setOptions] = useState([
    {
      label: "websiteDevlopment",
      isSelected: false,
    },
    {
      label: "branding",
      isSelected: false,
    },
    {
      label: "ecommerece",
      isSelected: false,
    },
    {
      label: "animations",
      isSelected: false,
    },
    {
      label: "webApplications",
      isSelected: false,
    },
    {
      label: "mobileAppDevelopment",
      isSelected: false,
    },
    {
      label: "agreedToTerms",
      isSelected: false,
    },
  ]);

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
    } else if (name === "link") {
      setLink(value);
    }
  };

  const getOptionValue = (option) => {
    const { label } = options?.find((item) => item.label === option);
    return label;
  };

  const hanlderCheckBoxAction = (option) => {
    const tempOptions = options.map((item) => {
      if (item.label === option) {
        return { ...item, isSelected: !item.isSelected };
      }
      return item;
    });
    setOptions(tempOptions);
  };

  const getSelectedServices = () => {
    const selectedServices = options.filter((item) => item.isSelected);
    return selectedServices.map((item) => item.label);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const service = getSelectedServices();
    //   const data = {
    //     name,
    //     email,
    //     phone,
    //     businessName: businessValue,
    //     url: link,
    //     budget: budgetValue,
    //     message,
    //     service,
    //   };
    //   const res = await post("/list-form", data);
    //   if (res.status) {
    //     setIsSubmitted(true);
    //   }
    // } catch (error) {
    //   setIsSubmitted(false);
    //   console.log("error", error);
    // }
  };
  return (
    <div className={classList.contactform}>
      <Section>
        <div style={{ textAlign: "center" }}>
          <Header fontWeight="bold" fontSize="42">
            We are here for you
          </Header>
          <Paragraph fontWeight="semi-bold">
            Leave your details below or call us on
            <a href={`tel:${phoneNumber}`} className={classList.callnow}>
              {" "}
              {phoneNumber}
            </a>{" "}
            and let`s chat about your business, your goals, and how we can help
            you grow.
          </Paragraph>
        </div>

        <form>
          <div className={classList.form_row}>
            <div className={`${classList.flex_cols} ${classList.input_styles}`}>
              <input
                name="name"
                value={name}
                type="text"
                placeholder="Enter Your Name"
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
            <div className={`${classList.flex_cols} ${classList.input_styles}`}>
              <input
                name="email"
                value={email}
                type="email"
                placeholder="Enter Your Email"
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
          </div>
          <div className={classList.form_row}>
            <div className={`${classList.flex_cols} ${classList.input_styles}`}>
              <input
                name="phone"
                value={phone}
                type="text"
                placeholder="+1 Phone number"
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
            <div className={`${classList.flex_cols} ${classList.input_styles}`}>
              <CustomSelect
                onSelect={(e) => {
                  setBusinessValue(e);
                }}
                placeholder="Enter Business Name"
                Options={businessOption}
              />
            </div>
          </div>
          <div className={classList.form_row}>
            <div className={`${classList.flex_cols} ${classList.input_styles}`}>
              <input
                name="link"
                value={link}
                type="text"
                placeholder="https://"
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
            <div className={`${classList.flex_cols} ${classList.input_styles}`}>
              <CustomSelect
                onSelect={(e) => {
                  setBudgetValue(e);
                }}
                placeholder="Budget"
                Options={budgetOption}
              />
            </div>
          </div>
          <div className={classList.form_row}>
            <div className={`${classList.flex_cols} ${classList.input_styles}`}>
              <textarea
                placeholder="Enter Message Here"
                name="message"
                value={message}
                id=""
                cols="30"
                rows="10"
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
          </div>
          <div style={{ marginTop: "20px" }} className={classList.form_row}>
            <div className={`${classList.flex_cols} ${classList.check_styled}`}>
              <label className={classList.container}>
                Website Development
                <input
                  onChange={(e) => hanlderCheckBoxAction(e.target.value)}
                  value={getOptionValue("websiteDevlopment")}
                  type="checkbox"
                  name="websiteDevlopment"
                />
                <span className={classList.checkmark}></span>
              </label>
              <label className={classList.container}>
                Branding
                <input
                  onChange={(e) => hanlderCheckBoxAction(e.target.value)}
                  value={getOptionValue("branding")}
                  type="checkbox"
                  name="branding"
                />
                <span className={classList.checkmark}></span>
              </label>
            </div>
            <div className={`${classList.flex_cols} ${classList.check_styled}`}>
              <label className={classList.container}>
                E-Commerce
                <input
                  onChange={(e) => hanlderCheckBoxAction(e.target.value)}
                  value={getOptionValue("ecommerece")}
                  type="checkbox"
                  name="ecommerece"
                />
                <span className={classList.checkmark}></span>
              </label>
              <label className={classList.container}>
                Animations
                <input
                  onChange={(e) => hanlderCheckBoxAction(e.target.value)}
                  value={getOptionValue("animations")}
                  type="checkbox"
                  name="animations"
                />
                <span className={classList.checkmark}></span>
              </label>
            </div>
            <div className={`${classList.flex_cols} ${classList.check_styled}`}>
              <label className={classList.container}>
                Web Applications
                <input
                  onChange={(e) => hanlderCheckBoxAction(e.target.value)}
                  value={getOptionValue("webApplications")}
                  type="checkbox"
                  name="webApplications"
                />
                <span className={classList.checkmark}></span>
              </label>
              <label className={classList.container}>
                Mobile Applications
                <input
                  onChange={(e) => hanlderCheckBoxAction(e.target.value)}
                  value={getOptionValue("mobileAppDevelopment")}
                  type="checkbox"
                  name="mobileAppDevelopment"
                />
                <span className={classList.checkmark}></span>
              </label>
            </div>
          </div>
          <div className={classList.form_row}>
            <div className={`${classList.flex_cols} ${classList.policy}`}>
              <label className={classList.container}>
                By clicking submit you agree to our{" "}
                <input
                  onChange={(e) => hanlderCheckBoxAction(e.target.value)}
                  value={getOptionValue("agreedToTerms")}
                  type="checkbox"
                  name="agreedToTerms"
                />
                <span className={classList.checkmark}></span>
              </label>
              <Link href="/privacy-policy">
                <span
                  style={{
                    color: "black",
                    fontWeight: "500",
                    marginLeft: "5px",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Privacy policy
                </span>
              </Link>
            </div>
          </div>
          <div className={classList.form_row}>
            <div
              className={`${classList.flex_cols} ${classList.button_styles}`}
            >
              <Button
                htmlType="button"
                onClick={(e) => handleFormSubmit(e)}
                hover={true}
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </Section>
      {isSubmitted && (
        <ShowMessage
          modal={isSubmitted}
          setModal={setIsSubmitted}
          infoType="success"
        >
          Successfully submitted
        </ShowMessage>
      )}
    </div>
  );
};

export default ContactForm;
